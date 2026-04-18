import { useCallback, useEffect, useMemo, useState } from 'react';
import { SlidersHorizontal, X, ChevronDown, ChevronUp, RefreshCw, Calendar, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CourseCard } from '../components/CourseCard';
import {
  catalogCourses,
  chronogolfEnabledCourseCount,
  trackedCourseCount,
  type CatalogCourse,
} from '../data/courseCatalog';
import { clearTeeTimeCache, loadChronogolfCourses } from '../services/teeTimeService';

// Distance options in miles
const DISTANCE_OPTIONS = [5, 10, 25, 50];

type SortOption = 'distance' | 'price' | 'rating';
type MaxPrice = 20 | 35 | 50 | 75 | 999;

interface Filters {
  holes: 'any' | '9' | '18';
  timeWindow: 'any' | 'morning' | 'midday' | 'afternoon';
  groupSize: number;
  maxWalkingPrice: MaxPrice;
  maxDistance: number;
  sort: SortOption;
}

function FilterSection({
  title,
  icon,
  children,
  defaultOpen = true,
}: {
  title: string;
  icon?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid rgba(190,201,193,0.2)', paddingBottom: 20, marginBottom: 20 }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between w-full mb-3"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <span
          style={{
            fontFamily: "'Public Sans', sans-serif",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#3f4943',
          }}
        >
          {icon && `${icon} `}
          {title}
        </span>
        {open ? <ChevronUp size={14} style={{ color: '#3f4943' }} /> : <ChevronDown size={14} style={{ color: '#3f4943' }} />}
      </button>
      {open && children}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-sm transition-all"
      style={{
        fontFamily: "'Public Sans', sans-serif",
        fontSize: 12,
        fontWeight: active ? 700 : 400,
        background: active ? '#004d34' : '#ecfdf5',
        color: active ? '#ffffff' : '#004d34',
        border: 'none',
        cursor: 'pointer',
        letterSpacing: '0.3px',
      }}
    >
      {children}
    </button>
  );
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(`${dateStr}T12:00:00`);
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

function formatUpdatedAt(value: string | null) {
  if (!value) return 'Not loaded yet';
  return new Date(value).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

export function ResultsPage() {
  const { searchParams, setSearchParams } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [fromCache, setFromCache] = useState(false);
  const [selectedDate, setSelectedDate] = useState(searchParams.date);
  const [liveCourses, setLiveCourses] = useState<CatalogCourse[]>(
    catalogCourses.filter(course => course.liveTeeTimesEnabled)
  );
  const [filters, setFilters] = useState<Filters>({
    holes: searchParams.holes as Filters['holes'],
    timeWindow: searchParams.timeWindow,
    groupSize: searchParams.groupSize,
    maxWalkingPrice: 999,
    maxDistance: searchParams.radius,
    sort: 'distance',
  });

  const loadCourses = useCallback(
    async (forceRefresh = false) => {
      setLoading(true);
      setError(null);

      try {
        const result = await loadChronogolfCourses(selectedDate, forceRefresh);
        setLiveCourses(result.courses);
        setLastUpdated(result.fetchedAt);
        setFromCache(result.fromCache);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load Chronogolf tee times right now.');
      } finally {
        setLoading(false);
      }
    },
    [selectedDate]
  );

  // Load courses when date changes
  useEffect(() => {
    void loadCourses(false);
  }, [loadCourses]);

  function handleDateChange(newDate: string) {
    setSelectedDate(newDate);
    clearTeeTimeCache(newDate);
    async function loadNewDate() {
      setLoading(true);
      setError(null);
      try {
        const result = await loadChronogolfCourses(newDate, true);
        setLiveCourses(result.courses);
        setLastUpdated(result.fetchedAt);
        setFromCache(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load tee times for selected date.');
      } finally {
        setLoading(false);
      }
    }
    void loadNewDate();
  }

  async function handleRefresh() {
    clearTeeTimeCache(selectedDate);
    await loadCourses(true);
  }

  function updateFilter<K extends keyof Filters>(key: K, val: Filters[K]) {
    setFilters(prev => ({ ...prev, [key]: val }));
  }

  const trackedWithinRange = useMemo(
    () => catalogCourses.filter(course => course.distance <= filters.maxDistance),
    [filters.maxDistance]
  );

  const chronogolfWithinRange = useMemo(
    () => trackedWithinRange.filter(course => course.liveTeeTimesEnabled),
    [trackedWithinRange]
  );

  const upcomingIntegrationsCount = trackedWithinRange.length - chronogolfWithinRange.length;

  const filteredCourses = useMemo(() => {
    let list = liveCourses.filter(course => {
      // Must have tee times
      if (!course.teeTimes || course.teeTimes.length === 0) return false;
      
      if (course.distance > filters.maxDistance) return false;
      if (filters.holes !== 'any' && !course.holes.includes(Number(filters.holes))) return false;

      const walkPrices = course.teeTimes
        .filter(time => filters.holes === 'any' || time.holes === Number(filters.holes))
        .map(time => time.walkingPrice);

      if (walkPrices.length && Math.min(...walkPrices) > filters.maxWalkingPrice) return false;

      // Must have at least one available time slot matching filters
      return course.teeTimes.some(time => {
        const holesOk = filters.holes === 'any' || time.holes === Number(filters.holes);
        const timeOk = filters.timeWindow === 'any' || time.period === filters.timeWindow;
        const availOk = time.available >= (filters.groupSize >= 5 ? 4 : filters.groupSize);
        return holesOk && timeOk && availOk;
      });
    });

    list = [...list].sort((a, b) => {
      if (filters.sort === 'distance') return a.distance - b.distance;
      if (filters.sort === 'rating') return b.rating - a.rating;
      if (filters.sort === 'price') {
        const aMin = Math.min(...a.teeTimes.map(time => time.walkingPrice));
        const bMin = Math.min(...b.teeTimes.map(time => time.walkingPrice));
        return aMin - bMin;
      }
      return 0;
    });

    return list;
  }, [filters, liveCourses]);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8">
      <div className="flex items-start justify-between mb-8 gap-6">
        <div>
          <h1
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 400,
              fontSize: 32,
              color: '#004d34',
              letterSpacing: '-0.5px',
              marginBottom: 4,
            }}
          >
            {loading ? 'Loading tee times…' : `${filteredCourses.length} Course${filteredCourses.length !== 1 ? 's' : ''} Available`}
          </h1>
          <p
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: 14,
              color: '#3f4943',
            }}
          >
            {formatDate(searchParams.date)} · Near {searchParams.location} · Within {filters.maxDistance} miles
          </p>
          <p
            className="mt-2"
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: 12,
              color: '#047857',
            }}
          >
            Tracking {trackedCourseCount} courses overall · {chronogolfEnabledCourseCount} currently live through Chronogolf · {upcomingIntegrationsCount} more in-range courses still need tee-time integrations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-between md:justify-end w-full">
          <div
            className="px-3 py-2 rounded-sm"
            style={{ background: '#ecfdf5', minWidth: 220 }}
          >
            <div
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#047857',
              }}
            >
              Chronogolf status
            </div>
            <div
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: 12,
                color: '#3f4943',
                marginTop: 2,
              }}
            >
              {fromCache ? 'Cached data' : 'Fresh data'} · Updated {formatUpdatedAt(lastUpdated)}
            </div>
          </div>

          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 px-4 py-2 rounded-sm"
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              background: '#004d34',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <RefreshCw size={13} />
            Clear Cache + Refresh
          </button>

          <div className="flex items-center gap-1">
            <span
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                color: '#3f4943',
              }}
            >
              Sort:
            </span>
            {(['distance', 'rating', 'price'] as SortOption[]).map(sort => (
              <button
                key={sort}
                onClick={() => updateFilter('sort', sort)}
                className="px-3 py-1.5 rounded-sm capitalize transition-all"
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: filters.sort === sort ? 700 : 400,
                  background: filters.sort === sort ? '#004d34' : 'transparent',
                  color: filters.sort === sort ? '#ffffff' : '#3f4943',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {sort}
              </button>
            ))}
          </div>

          <button
            onClick={() => setSidebarOpen(open => !open)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm"
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              background: sidebarOpen ? '#ecfdf5' : '#004d34',
              color: sidebarOpen ? '#004d34' : '#ffffff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <SlidersHorizontal size={13} />
            Filters
          </button>
        </div>
      </div>

      {error && (
        <div
          className="mb-6 px-4 py-3 rounded-sm"
          style={{ background: '#fef2f2', color: '#991b1b', border: '1px solid rgba(153,27,27,0.15)' }}
        >
          {error}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-full">
        {/* Mobile filter toggle button */}
        <button
          onClick={() => setSidebarOpen(open => !open)}
          className="md:hidden flex items-center justify-center gap-2 px-4 py-2 rounded-sm w-full max-w-full"
          style={{
            fontFamily: "'Public Sans', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            background: '#ecfdf5',
            color: '#004d34',
            border: 'none',
            cursor: 'pointer',
            boxSizing: 'border-box',
          }}
        >
          <SlidersHorizontal size={13} />
          {sidebarOpen ? 'Hide Filters' : 'Show Filters'}
        </button>

        {sidebarOpen && (
          <aside
            className="w-full md:w-64 md:flex-shrink-0 max-w-full"
            style={{
              background: '#ecfdf5',
              padding: '12px',
              borderRadius: '4px',
              boxSizing: 'border-box',
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: '#004d34',
                }}
              >
                Filter Results
              </h2>
              <button
                onClick={() => setSidebarOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2 }}
              >
                <X size={15} style={{ color: '#3f4943' }} />
              </button>
            </div>

            <FilterSection title="Date" icon="📅">
              <input
                type="date"
                value={selectedDate}
                onChange={e => handleDateChange(e.target.value)}
                className="w-full px-3 py-2 rounded-sm"
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 12,
                  background: '#ffffff',
                  color: '#004d34',
                  border: '1px solid rgba(0,77,52,0.2)',
                  cursor: 'pointer',
                }}
              />
            </FilterSection>

            <FilterSection title="Distance" icon="📍">
              <div className="flex flex-wrap gap-1.5">
                {DISTANCE_OPTIONS.map(dist => (
                  <Chip
                    key={dist}
                    active={filters.maxDistance === dist}
                    onClick={() => updateFilter('maxDistance', dist)}
                  >
                    {dist} mi
                  </Chip>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Group Size" icon="👥">
              <div className="flex gap-1.5 flex-wrap">
                {[1, 2, 3, 4].map(value => (
                  <Chip key={value} active={filters.groupSize === value} onClick={() => updateFilter('groupSize', value)}>
                    {value}
                  </Chip>
                ))}
                <Chip active={filters.groupSize >= 5} onClick={() => updateFilter('groupSize', 5)}>
                  5+
                </Chip>
              </div>
            </FilterSection>

            <FilterSection title="Time of Day" icon="🕐">
              <div className="flex flex-col gap-1.5">
                <Chip active={filters.timeWindow === 'any'} onClick={() => updateFilter('timeWindow', 'any')}>
                  Any Time
                </Chip>
                <Chip active={filters.timeWindow === 'morning'} onClick={() => updateFilter('timeWindow', 'morning')}>
                  Morning (5–10 AM)
                </Chip>
                <Chip active={filters.timeWindow === 'midday'} onClick={() => updateFilter('timeWindow', 'midday')}>
                  Midday (10 AM–2 PM)
                </Chip>
                <Chip active={filters.timeWindow === 'afternoon'} onClick={() => updateFilter('timeWindow', 'afternoon')}>
                  Afternoon (2–7 PM)
                </Chip>
              </div>
            </FilterSection>

            <FilterSection title="Number of Holes" icon="⛳">
              <div className="flex gap-2">
                <Chip active={filters.holes === 'any'} onClick={() => updateFilter('holes', 'any')}>
                  Any
                </Chip>
                <Chip active={filters.holes === '9'} onClick={() => updateFilter('holes', '9')}>
                  9 Holes
                </Chip>
                <Chip active={filters.holes === '18'} onClick={() => updateFilter('holes', '18')}>
                  18 Holes
                </Chip>
              </div>
            </FilterSection>

            <FilterSection title="Max Walking Price" icon="💰">
              <div className="flex flex-col gap-1.5">
                {([20, 35, 50, 75, 999] as MaxPrice[]).map(price => (
                  <Chip key={price} active={filters.maxWalkingPrice === price} onClick={() => updateFilter('maxWalkingPrice', price)}>
                    {price === 999 ? 'Any Price' : `Under $${price}`}
                  </Chip>
                ))}
              </div>
            </FilterSection>

            <button
              onClick={() =>
                setFilters({
                  holes: 'any',
                  timeWindow: 'any',
                  groupSize: 2,
                  maxWalkingPrice: 999,
                  maxDistance: searchParams.radius,
                  sort: 'distance',
                })
              }
              className="w-full py-2 rounded-sm mt-2"
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                background: 'transparent',
                color: '#047857',
                border: '1px solid rgba(4,120,87,0.25)',
                cursor: 'pointer',
              }}
            >
              Reset Filters
            </button>
          </aside>
        )}

        <div className="flex-1 w-full min-w-0">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <RefreshCw className="animate-spin" size={28} style={{ color: '#047857' }} />
              <h3
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 400,
                  fontSize: 22,
                  color: '#004d34',
                }}
              >
                Loading available tee times…
              </h3>
              <p
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 14,
                  color: '#3f4943',
                }}
              >
                Pulling live Chronogolf inventory for your selected date.
              </p>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <div style={{ fontSize: 48 }}>⛳</div>
              <h3
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 400,
                  fontSize: 22,
                  color: '#004d34',
                }}
              >
                No live Chronogolf tee times match these filters
              </h3>
              <p
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 14,
                  color: '#3f4943',
                  textAlign: 'center',
                  maxWidth: 520,
                }}
              >
                Try expanding your radius or time window. We’re already tracking {trackedWithinRange.length} courses in-range, but only {chronogolfWithinRange.length} have live tee-time integrations so far.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 w-full max-w-full">
              {filteredCourses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  groupSize={filters.groupSize}
                  holesFilter={filters.holes}
                  timeFilter={filters.timeWindow}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
