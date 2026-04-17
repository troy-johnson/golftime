import { useState, useMemo } from 'react';
import { SlidersHorizontal, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CourseCard } from '../components/CourseCard';
import { allCourses } from '../data/mockData';

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
          {icon && `${icon} `}{title}
        </span>
        {open ? <ChevronUp size={14} style={{ color: '#3f4943' }} /> : <ChevronDown size={14} style={{ color: '#3f4943' }} />}
      </button>
      {open && children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
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
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

export function ResultsPage() {
  const { searchParams } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    holes: searchParams.holes as Filters['holes'],
    timeWindow: searchParams.timeWindow,
    groupSize: searchParams.groupSize,
    maxWalkingPrice: 999,
    maxDistance: searchParams.radius,
    sort: 'distance',
  });

  function updateFilter<K extends keyof Filters>(key: K, val: Filters[K]) {
    setFilters(prev => ({ ...prev, [key]: val }));
  }

  const filteredCourses = useMemo(() => {
    let list = allCourses.filter(c => {
      // Distance
      if (c.distance > filters.maxDistance) return false;
      // Holes
      if (filters.holes !== 'any') {
        if (!c.holes.includes(Number(filters.holes))) return false;
      }
      // Price filter
      const walkPrices = c.teeTimes
        .filter(t => filters.holes === 'any' || t.holes === Number(filters.holes))
        .map(t => t.walkingPrice);
      if (walkPrices.length && Math.min(...walkPrices) > filters.maxWalkingPrice) return false;

      // Has available times
      const hasAvailableTime = c.teeTimes.some(t => {
        const holesOk = filters.holes === 'any' || t.holes === Number(filters.holes);
        const timeOk = filters.timeWindow === 'any' || t.period === filters.timeWindow;
        const availOk = t.available >= (filters.groupSize >= 5 ? 4 : filters.groupSize);
        return holesOk && timeOk && availOk;
      });
      return hasAvailableTime;
    });

    // Sort
    list = [...list].sort((a, b) => {
      if (filters.sort === 'distance') return a.distance - b.distance;
      if (filters.sort === 'rating') return b.rating - a.rating;
      if (filters.sort === 'price') {
        const aMin = Math.min(...a.teeTimes.map(t => t.walkingPrice));
        const bMin = Math.min(...b.teeTimes.map(t => t.walkingPrice));
        return aMin - bMin;
      }
      return 0;
    });

    return list;
  }, [filters]);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-8">
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
            {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Available
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
        </div>
        <div className="flex items-center gap-3">
          {/* Sort */}
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
            {(['distance', 'rating', 'price'] as SortOption[]).map(s => (
              <button
                key={s}
                onClick={() => updateFilter('sort', s)}
                className="px-3 py-1.5 rounded-sm capitalize transition-all"
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: filters.sort === s ? 700 : 400,
                  background: filters.sort === s ? '#004d34' : 'transparent',
                  color: filters.sort === s ? '#ffffff' : '#3f4943',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {s}
              </button>
            ))}
          </div>
          <button
            onClick={() => setSidebarOpen(o => !o)}
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

      <div className="flex gap-8">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside
            className="w-64 flex-shrink-0"
            style={{
              background: '#ecfdf5',
              padding: '24px 20px',
              borderRadius: 2,
              alignSelf: 'flex-start',
              position: 'sticky',
              top: 80,
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

            {/* Group Size */}
            <FilterSection title="Group Size" icon="👥">
              <div className="flex gap-1.5 flex-wrap">
                {[1, 2, 3, 4].map(n => (
                  <Chip key={n} active={filters.groupSize === n} onClick={() => updateFilter('groupSize', n)}>
                    {n}
                  </Chip>
                ))}
                <Chip active={filters.groupSize >= 5} onClick={() => updateFilter('groupSize', 5)}>
                  5+
                </Chip>
              </div>
              {filters.groupSize >= 5 && (
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: 11,
                    color: '#047857',
                    lineHeight: 1.5,
                  }}
                >
                  Showing consecutive tee time blocks for large groups.
                </p>
              )}
            </FilterSection>

            {/* Time of Day */}
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

            {/* Holes */}
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

            {/* Price */}
            <FilterSection title="Max Walking Price" icon="💰">
              <div className="flex flex-col gap-1.5">
                {([20, 35, 50, 75, 999] as MaxPrice[]).map(p => (
                  <Chip key={p} active={filters.maxWalkingPrice === p} onClick={() => updateFilter('maxWalkingPrice', p)}>
                    {p === 999 ? 'Any Price' : `Under $${p}`}
                  </Chip>
                ))}
              </div>
              <p
                className="mt-3"
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 11,
                  color: 'rgba(63,73,67,0.6)',
                  lineHeight: 1.5,
                }}
              >
                Cart fees are ~40% above walking rate. Toggle on each card.
              </p>
            </FilterSection>

            {/* Distance */}
            <FilterSection title="Max Distance" icon="📍" defaultOpen={false}>
              <div className="flex flex-col gap-1.5">
                {[5, 10, 25, 50].map(d => (
                  <Chip key={d} active={filters.maxDistance === d} onClick={() => updateFilter('maxDistance', d)}>
                    Within {d} miles
                  </Chip>
                ))}
              </div>
            </FilterSection>

            {/* Reset */}
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

        {/* Results Grid */}
        <div className="flex-1">
          {filteredCourses.length === 0 ? (
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
                No courses match your filters
              </h3>
              <p
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 14,
                  color: '#3f4943',
                }}
              >
                Try adjusting your price range, distance, or time window.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
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