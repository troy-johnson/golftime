import type { TeeTime } from '../data/mockData';
import { catalogCourses, chronogolfTrackedCourseIds, type CatalogCourse } from '../data/courseCatalog';

const CACHE_TTL_MS = 5 * 60 * 1000;
const CACHE_PREFIX = 'golfTimeChronogolf:';

interface ChronogolfApiTeeTime {
  id: number;
  uuid: string;
  start_time: string;
  starts_at: string;
  max_player_size: number;
  course: {
    uuid: string;
  };
  default_price?: {
    green_fee?: number;
    half_cart?: number | null;
    one_person_cart?: number | null;
    subtotal?: number;
    bookable_holes?: number;
  };
}

interface ChronogolfApiResponse {
  status: string;
  teetimes: ChronogolfApiTeeTime[];
}

interface TeeTimeCachePayload {
  fetchedAt: string;
  courses: CatalogCourse[];
}

export interface TeeTimeLoadResult {
  courses: CatalogCourse[];
  fetchedAt: string;
  fromCache: boolean;
}

function getCacheKey(date: string) {
  return `${CACHE_PREFIX}${date}`;
}

function getPeriod(timeSort: number): TeeTime['period'] {
  if (timeSort < 600) return 'morning';
  if (timeSort < 840) return 'midday';
  return 'afternoon';
}

function toDisplayTime(time24: string) {
  const [hourString, minuteString] = time24.split(':');
  const hour = Number(hourString);
  const minute = Number(minuteString);
  const h12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const suffix = hour >= 12 ? 'PM' : 'AM';
  return `${h12}:${String(minute).padStart(2, '0')} ${suffix}`;
}

function normalizeTeeTime(item: ChronogolfApiTeeTime): TeeTime {
  const [hourString, minuteString] = item.start_time.split(':');
  const timeSort = Number(hourString) * 60 + Number(minuteString);
  const walkingPrice = Math.round(item.default_price?.green_fee ?? item.default_price?.subtotal ?? 0);
  const cartAddon = item.default_price?.half_cart ?? item.default_price?.one_person_cart ?? 0;

  return {
    id: item.uuid || String(item.id),
    time: toDisplayTime(item.start_time),
    timeSort,
    period: getPeriod(timeSort),
    holes: item.default_price?.bookable_holes === 9 ? 9 : 18,
    available: item.max_player_size,
    walkingPrice,
    cartPrice: Math.round(walkingPrice + (cartAddon ?? 0)),
  };
}

function hydrateCourses(teetimes: ChronogolfApiTeeTime[]) {
  const grouped = new Map<string, TeeTime[]>();

  for (const item of teetimes) {
    const parentCourse = catalogCourses.find(course => course.chronogolfCourseIds?.includes(item.course.uuid));
    if (!parentCourse) continue;

    const current = grouped.get(parentCourse.id) ?? [];
    current.push(normalizeTeeTime(item));
    grouped.set(parentCourse.id, current);
  }

  return catalogCourses
    .filter(course => course.liveTeeTimesEnabled)
    .map(course => ({
      ...course,
      teeTimes: (grouped.get(course.id) ?? []).sort((a, b) => a.timeSort - b.timeSort),
    }));
}

export function clearTeeTimeCache(date?: string) {
  if (date) {
    localStorage.removeItem(getCacheKey(date));
    return;
  }

  for (const key of Object.keys(localStorage)) {
    if (key.startsWith(CACHE_PREFIX)) {
      localStorage.removeItem(key);
    }
  }
}

export function getTeeTimeCacheAge(date: string) {
  const raw = localStorage.getItem(getCacheKey(date));
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as TeeTimeCachePayload;
    return Date.now() - new Date(parsed.fetchedAt).getTime();
  } catch {
    return null;
  }
}

export async function loadChronogolfCourses(date: string, forceRefresh = false): Promise<TeeTimeLoadResult> {
  const cacheKey = getCacheKey(date);

  if (!forceRefresh) {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached) as TeeTimeCachePayload;
        if (Date.now() - new Date(parsed.fetchedAt).getTime() < CACHE_TTL_MS) {
          return { courses: parsed.courses, fetchedAt: parsed.fetchedAt, fromCache: true };
        }
      } catch {
        localStorage.removeItem(cacheKey);
      }
    }
  }

  const courseIds = encodeURIComponent(chronogolfTrackedCourseIds.join(','));
  const teetimes: ChronogolfApiTeeTime[] = [];

  for (let page = 1; page <= 8; page += 1) {
    const endpoint = `/api/chronogolf?start_date=${encodeURIComponent(date)}&course_ids=${courseIds}&holes=9%2C18&page=${page}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Chronogolf request failed with ${response.status}`);
    }

    const payload = (await response.json()) as ChronogolfApiResponse;
    const pageTeeTimes = payload.teetimes ?? [];
    teetimes.push(...pageTeeTimes);

    if (pageTeeTimes.length === 0) break;
  }

  const courses = hydrateCourses(teetimes);
  const fetchedAt = new Date().toISOString();

  localStorage.setItem(cacheKey, JSON.stringify({ courses, fetchedAt } satisfies TeeTimeCachePayload));

  return { courses, fetchedAt, fromCache: false };
}
