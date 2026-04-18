import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MapPin, ChevronDown, ArrowRight, Sun, Cloud, CloudRain, Wind, Loader2 } from 'lucide-react';
import { useApp, SearchParams } from '../context/AppContext';
import { fetchWeather, toWeatherDays } from '../services/weatherService';
import type { DailyForecast } from '../data/weatherTypes';
import { weekWeather } from '../data/mockData';
import { chronogolfEnabledCourseCount, trackedCourseCount } from '../data/courseCatalog';
const heroImageUrl = 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23cb?w=1200&h=600&fit=crop';

const RADIUS_OPTIONS = [5, 10, 25, 50];
const TIME_OPTIONS = [
  { value: 'any', label: 'Any Time' },
  { value: 'morning', label: 'Morning (5–10 AM)' },
  { value: 'midday', label: 'Midday (10 AM–2 PM)' },
  { value: 'afternoon', label: 'Afternoon (2–7 PM)' },
];

function WeatherIcon({ icon, size = 18 }: { icon: string; size?: number }) {
  if (icon === 'sunny') return <Sun size={size} style={{ color: '#fcd400' }} />;
  if (icon === 'rainy') return <CloudRain size={size} style={{ color: '#93c5fd' }} />;
  if (icon === 'windy') return <Wind size={size} style={{ color: '#d1d5db' }} />;
  return <Cloud size={size} style={{ color: '#d1d5db' }} />;
}

export function SearchPage() {
  const navigate = useNavigate();
  const { searchParams, setSearchParams } = useApp();

  const [form, setForm] = useState<SearchParams>(searchParams);

  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weekendDays, setWeekendDays] = useState<typeof weekWeather>([]);

  useEffect(() => {
    async function loadWeather() {
      try {
        const data = await fetchWeather();
        const days = toWeatherDays(data.daily).filter(d => d.isWeekend);
        setWeekendDays(days);
      } catch {
        // Fallback to mock data on error
        setWeekendDays(weekWeather.filter(d => d.isWeekend));
      } finally {
        setWeatherLoading(false);
      }
    }
    loadWeather();
  }, []);

  // Also keep weekendDays available for the page

  function update<K extends keyof SearchParams>(key: K, value: SearchParams[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setSearchParams(form);
    navigate('/results');
  }

  return (
    <div className="relative">
      {/* Hero */}
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={heroImageUrl}
          alt="Golf course"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,77,52,0.35) 0%, rgba(0,77,52,0.1) 40%, #e9ffed 100%)',
          }}
        />
        <div className="absolute bottom-12 left-12 right-12">
          <h1
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 400,
              fontSize: 52,
              color: '#ffffff',
              letterSpacing: '-1px',
              lineHeight: 1.15,
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}
          >
            The Perfect Round
            <br />
            Awaits.
          </h1>
        </div>

        {/* Weekend Weather Strip */}
        <div className="absolute top-6 right-6 flex gap-2">
          {weatherLoading && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-sm" style={{ background: 'rgba(255,255,255,0.9)' }}>
              <Loader2 size={12} className="animate-spin" style={{ color: '#004d34' }} />
              <span style={{ fontSize: 11, color: '#004d34' }}>Loading...</span>
            </div>
          )}
          {!weatherLoading && weekendDays.map(day => (
            <div
              key={day.dayShort}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded"
              style={{
                background: 'rgba(6,78,59,0.75)',
                backdropFilter: 'blur(12px)',
                minWidth: 64,
              }}
            >
              <span
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '1.2px',
                  color: '#facc15',
                  textTransform: 'uppercase',
                }}
              >
                {day.dayShort}
              </span>
              <WeatherIcon icon={day.conditionIcon} size={16} />
              <span
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#ecfdf5',
                }}
              >
                {day.high}°
              </span>
              <span
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 10,
                  color: 'rgba(209,250,229,0.7)',
                }}
              >
                {day.low}°
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Search Form Card */}
      <div className="max-w-screen-lg mx-auto px-6 -mt-8 relative z-10">
        <div
          className="rounded-sm overflow-hidden"
          style={{
            background: '#ffffff',
            boxShadow: '0 8px 40px -5px rgba(8,32,19,0.12)',
          }}
        >
          {/* Form Header */}
          <div className="px-10 pt-8 pb-6" style={{ background: '#ecfdf5' }}>
            <h2
              style={{
                fontFamily: "'Noto Serif', serif",
                fontWeight: 400,
                fontSize: 28,
                color: '#004d34',
                letterSpacing: '-0.5px',
                marginBottom: 4,
              }}
            >
              Find Tee Times
            </h2>
            <p
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: 15,
                color: '#3f4943',
                marginBottom: 0,
              }}
            >
              Curate your next experience on the links.
            </p>
          </div>

          <form onSubmit={handleSearch} className="px-10 py-8">
            <div className="grid grid-cols-2 gap-x-10 gap-y-8">
              {/* Location */}
              <div className="col-span-2">
                <FieldLabel>LOCATION</FieldLabel>
                <div className="relative mt-2">
                  <MapPin
                    size={16}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                    style={{ color: '#6f7a72' }}
                  />
                  <input
                    type="text"
                    value={form.location}
                    onChange={e => update('location', e.target.value)}
                    className="w-full pl-6 pb-2 pt-1 bg-transparent outline-none"
                    style={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: 18,
                      color: '#082013',
                      borderBottom: '2px solid rgba(190,201,193,0.3)',
                    }}
                    placeholder="City, State or ZIP"
                  />
                </div>
              </div>

              {/* Radius */}
              <div>
                <FieldLabel>SEARCH RADIUS</FieldLabel>
                <div className="relative mt-2">
                  <select
                    value={form.radius}
                    onChange={e => update('radius', Number(e.target.value))}
                    className="w-full pb-2 pt-1 bg-transparent outline-none appearance-none cursor-pointer"
                    style={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: 18,
                      color: '#082013',
                      borderBottom: '2px solid rgba(190,201,193,0.3)',
                    }}
                  >
                    {RADIUS_OPTIONS.map(r => (
                      <option key={r} value={r}>
                        {r} Miles
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: '#6f7a72' }}
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <FieldLabel>DATE</FieldLabel>
                <div className="relative mt-2">
                  <input
                    type="date"
                    value={form.date}
                    onChange={e => update('date', e.target.value)}
                    className="w-full pb-2 pt-1 bg-transparent outline-none appearance-none cursor-pointer"
                    style={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: 18,
                      color: '#082013',
                      borderBottom: '2px solid rgba(190,201,193,0.3)',
                    }}
                  />
                </div>
              </div>

              {/* Time Window */}
              <div>
                <FieldLabel>TIME WINDOW</FieldLabel>
                <div className="relative mt-2">
                  <select
                    value={form.timeWindow}
                    onChange={e => update('timeWindow', e.target.value as SearchParams['timeWindow'])}
                    className="w-full pb-2 pt-1 bg-transparent outline-none appearance-none cursor-pointer"
                    style={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: 18,
                      color: '#082013',
                      borderBottom: '2px solid rgba(190,201,193,0.3)',
                    }}
                  >
                    {TIME_OPTIONS.map(t => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: '#6f7a72' }}
                  />
                </div>
              </div>

              {/* Holes */}
              <div>
                <FieldLabel>HOLES</FieldLabel>
                <div className="flex gap-2 mt-3">
                  {(['any', '9', '18'] as const).map(h => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => update('holes', h)}
                      className="px-4 py-1.5 rounded-sm transition-all"
                      style={{
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: 13,
                        fontWeight: form.holes === h ? 700 : 400,
                        background: form.holes === h ? '#004d34' : '#ecfdf5',
                        color: form.holes === h ? '#ffffff' : '#004d34',
                        border: 'none',
                        cursor: 'pointer',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {h === 'any' ? 'Any' : `${h} Holes`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Group Size */}
              <div className="col-span-2">
                <FieldLabel>GROUP SIZE</FieldLabel>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {[1, 2, 3, 4, '5+'].map(n => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => update('groupSize', n === '5+' ? 5 : Number(n))}
                      className="w-12 py-2 rounded-sm transition-all flex items-center justify-center"
                      style={{
                        fontFamily: "'Public Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: (n === '5+' ? 5 : Number(n)) === form.groupSize ? 700 : 400,
                        background:
                          (n === '5+' ? 5 : Number(n)) === form.groupSize ? '#004d34' : '#ecfdf5',
                        color:
                          (n === '5+' ? 5 : Number(n)) === form.groupSize ? '#ffffff' : '#004d34',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                {form.groupSize >= 5 && (
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontSize: 12,
                      color: '#047857',
                      letterSpacing: '0.2px',
                    }}
                  >
                    Groups of 5+ require 2 consecutive tee times — we'll show available blocks.
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="col-span-2 flex justify-end pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-4 rounded-sm transition-opacity hover:opacity-90 active:opacity-80"
                  style={{
                    background: '#004d34',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '1.4px',
                    textTransform: 'uppercase',
                  }}
                >
                  SEARCH TIMES
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Quick Tips */}
        <div className="grid grid-cols-3 gap-6 mt-8 mb-12">
          {[
            {
              icon: '⛳',
              title: `${trackedCourseCount} Courses Tracked`,
              body: `${chronogolfEnabledCourseCount} currently load live Chronogolf tee times. Reduce range after search to narrow the board.`,
            },
            {
              icon: '🌤',
              title: 'Weekend Looks Great',
              body: 'Sunny skies Fri–Sun with highs in the low 70s. Prime golf weather.',
            },
            {
              icon: '👥',
              title: 'Group Friendly',
              body: 'Groups of 5+ get automatic consecutive tee time pairing.',
            },
          ].map(tip => (
            <div
              key={tip.title}
              className="p-6 rounded-sm"
              style={{ background: '#ffffff', boxShadow: '0 2px 12px rgba(8,32,19,0.06)' }}
            >
              <div className="text-2xl mb-3">{tip.icon}</div>
              <h3
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: '#004d34',
                  marginBottom: 6,
                }}
              >
                {tip.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 13,
                  color: '#3f4943',
                  lineHeight: 1.6,
                }}
              >
                {tip.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "'Public Sans', sans-serif",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '1.4px',
        textTransform: 'uppercase',
        color: '#004d34',
        display: 'block',
      }}
    >
      {children}
    </span>
  );
}
