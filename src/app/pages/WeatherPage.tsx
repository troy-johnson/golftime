import {
  Sun,
  Cloud,
  CloudRain,
  Wind,
  Droplets,
  Thermometer,
  Eye,
  Zap,
} from 'lucide-react';
import { weekWeather, currentWeather, WeatherDay } from '../data/mockData';

function WeatherIcon({ icon, size = 24, className = '' }: { icon: string; size?: number; className?: string }) {
  if (icon === 'sunny') return <Sun size={size} className={className} style={{ color: '#fcd400' }} />;
  if (icon === 'rainy') return <CloudRain size={size} className={className} style={{ color: '#93c5fd' }} />;
  if (icon === 'windy') return <Wind size={size} className={className} style={{ color: '#d1d5db' }} />;
  if (icon === 'cloudy') return <Cloud size={size} className={className} style={{ color: '#9ca3af' }} />;
  if (icon === 'partly-cloudy')
    return (
      <div className={`relative flex items-center ${className}`} style={{ width: size, height: size }}>
        <Sun size={size * 0.75} style={{ color: '#fcd400', position: 'absolute', top: 0, left: 0 }} />
        <Cloud size={size * 0.7} style={{ color: '#d1d5db', position: 'absolute', bottom: 0, right: 0 }} />
      </div>
    );
  return <Cloud size={size} className={className} style={{ color: '#9ca3af' }} />;
}

function GolfRating({ day }: { day: WeatherDay }) {
  const score =
    (day.high >= 60 && day.high <= 85 ? 3 : day.high > 85 ? 1 : 2) +
    (day.precipPct < 20 ? 3 : day.precipPct < 50 ? 2 : 0) +
    (day.windMph < 10 ? 2 : day.windMph < 20 ? 1 : 0);

  const max = 8;
  const pct = (score / max) * 100;

  let label = 'Poor';
  let color = '#ef4444';
  if (score >= 7) { label = 'Excellent'; color = '#16a34a'; }
  else if (score >= 5) { label = 'Good'; color = '#65a30d'; }
  else if (score >= 3) { label = 'Fair'; color = '#d97706'; }

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: 'rgba(63,73,67,0.7)' }}>
          Golf Rating
        </span>
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, fontWeight: 700, color }}>
          {label}
        </span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(190,201,193,0.3)' }}>
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

function WeekendDayCard({ day }: { day: WeatherDay }) {
  return (
    <div
      className="rounded-sm overflow-hidden flex-1"
      style={{
        background: '#004d34',
        boxShadow: '0 8px 32px rgba(0,77,52,0.2)',
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-4"
        style={{ background: 'rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#facc15',
                marginBottom: 2,
              }}
            >
              {day.dayFull}
            </div>
            <div
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: 13,
                color: 'rgba(209,250,229,0.7)',
              }}
            >
              {day.date}
            </div>
          </div>
          <WeatherIcon icon={day.conditionIcon} size={36} />
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <div className="flex items-baseline gap-2 mb-1">
          <span
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 400,
              fontSize: 42,
              color: '#ecfdf5',
              letterSpacing: '-1px',
            }}
          >
            {day.high}°
          </span>
          <span
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: 20,
              color: 'rgba(209,250,229,0.5)',
            }}
          >
            / {day.low}°
          </span>
        </div>
        <div
          style={{
            fontFamily: "'Public Sans', sans-serif",
            fontSize: 14,
            color: 'rgba(209,250,229,0.8)',
            marginBottom: 16,
          }}
        >
          {day.condition}
        </div>
        <div className="flex flex-col gap-2">
          <StatRow icon={<Wind size={13} style={{ color: '#facc15' }} />} label="Wind">
            {day.windMph} mph
          </StatRow>
          <StatRow icon={<Droplets size={13} style={{ color: '#93c5fd' }} />} label="Precip Chance">
            {day.precipPct}%
          </StatRow>
        </div>
        <div className="mt-4">
          <GolfRatingDark day={day} />
        </div>
      </div>
    </div>
  );
}

function GolfRatingDark({ day }: { day: WeatherDay }) {
  const score =
    (day.high >= 60 && day.high <= 85 ? 3 : day.high > 85 ? 1 : 2) +
    (day.precipPct < 20 ? 3 : day.precipPct < 50 ? 2 : 0) +
    (day.windMph < 10 ? 2 : day.windMph < 20 ? 1 : 0);
  const max = 8;
  const pct = (score / max) * 100;
  let label = 'Poor';
  let color = '#ef4444';
  if (score >= 7) { label = 'Excellent'; color = '#facc15'; }
  else if (score >= 5) { label = 'Good'; color = '#86efac'; }
  else if (score >= 3) { label = 'Fair'; color = '#fbbf24'; }

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(209,250,229,0.6)' }}>
          Golf Conditions
        </span>
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 12, fontWeight: 700, color }}>
          {label}
        </span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

function StatRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        {icon}
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 12, color: 'rgba(209,250,229,0.7)' }}>
          {label}
        </span>
      </div>
      <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 12, fontWeight: 600, color: '#ecfdf5' }}>
        {children}
      </span>
    </div>
  );
}

function SevenDayCard({ day }: { day: WeatherDay }) {
  return (
    <div
      className="flex items-center gap-4 px-5 py-3 rounded-sm transition-all"
      style={{
        background: day.isWeekend ? '#ecfdf5' : '#ffffff',
        boxShadow: day.isWeekend ? '0 2px 12px rgba(0,77,52,0.08)' : 'none',
        borderLeft: day.isWeekend ? '3px solid #fcd400' : '3px solid transparent',
      }}
    >
      <div style={{ width: 44 }}>
        <div
          style={{
            fontFamily: "'Public Sans', sans-serif",
            fontSize: 11,
            fontWeight: day.isWeekend ? 700 : 400,
            letterSpacing: '0.8px',
            color: day.isWeekend ? '#004d34' : '#3f4943',
          }}
        >
          {day.dayShort}
        </div>
        <div
          style={{
            fontFamily: "'Public Sans', sans-serif",
            fontSize: 10,
            color: 'rgba(63,73,67,0.6)',
          }}
        >
          {day.date}
        </div>
      </div>

      <div style={{ width: 32 }}>
        <WeatherIcon icon={day.conditionIcon} size={20} />
      </div>

      <div
        style={{
          fontFamily: "'Public Sans', sans-serif",
          fontSize: 12,
          color: '#3f4943',
          flex: 1,
        }}
      >
        {day.condition}
      </div>

      <div className="flex items-center gap-1.5">
        <Wind size={11} style={{ color: 'rgba(63,73,67,0.5)' }} />
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, color: 'rgba(63,73,67,0.6)' }}>
          {day.windMph}mph
        </span>
      </div>

      <div className="flex items-center gap-1">
        <Droplets size={11} style={{ color: '#93c5fd' }} />
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, color: 'rgba(63,73,67,0.6)' }}>
          {day.precipPct}%
        </span>
      </div>

      <div style={{ width: 60, textAlign: 'right' }}>
        <span style={{ fontFamily: "'Noto Serif', serif", fontSize: 15, fontWeight: 600, color: '#004d34' }}>
          {day.high}°
        </span>
        <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 13, color: 'rgba(63,73,67,0.5)', marginLeft: 4 }}>
          {day.low}°
        </span>
      </div>

      <div style={{ width: 60 }}>
        <GolfRating day={day} />
      </div>
    </div>
  );
}

export function WeatherPage() {
  const current = currentWeather;
  const weekendDays = weekWeather.filter(d => d.isWeekend);

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            fontSize: 36,
            color: '#004d34',
            letterSpacing: '-0.5px',
            marginBottom: 4,
          }}
        >
          Salt Lake Valley Weather
        </h1>
        <p
          style={{
            fontFamily: "'Public Sans', sans-serif",
            fontSize: 14,
            color: 'rgba(63,73,67,0.7)',
          }}
        >
          Current conditions & weekend forecast for your rounds · Updated {current.updated}
        </p>
      </div>

      {/* Current Conditions */}
      <div
        className="rounded-sm mb-8 overflow-hidden"
        style={{ background: '#004d34', boxShadow: '0 8px 40px rgba(0,77,52,0.25)' }}
      >
        <div className="flex items-stretch">
          {/* Big Temp */}
          <div className="flex-1 px-10 py-8">
            <div
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#facc15',
                marginBottom: 8,
              }}
            >
              Now · {current.location}
            </div>
            <div className="flex items-center gap-6">
              <WeatherIcon icon={current.conditionIcon} size={64} />
              <div>
                <div
                  style={{
                    fontFamily: "'Noto Serif', serif",
                    fontWeight: 300,
                    fontSize: 72,
                    color: '#ecfdf5',
                    letterSpacing: '-2px',
                    lineHeight: 1,
                  }}
                >
                  {current.temp}°
                </div>
                <div
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: 16,
                    color: 'rgba(209,250,229,0.7)',
                    marginTop: 4,
                  }}
                >
                  {current.condition} · Feels like {current.feelsLike}°
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className="flex flex-col justify-center gap-4 px-8 py-6"
            style={{ background: 'rgba(255,255,255,0.06)', minWidth: 200 }}
          >
            <StatRow icon={<Wind size={14} style={{ color: '#facc15' }} />} label="Wind">
              {current.windMph} mph {current.windDir}
            </StatRow>
            <StatRow icon={<Droplets size={14} style={{ color: '#93c5fd' }} />} label="Humidity">
              {current.humidity}%
            </StatRow>
            <StatRow icon={<Zap size={14} style={{ color: '#fbbf24' }} />} label="UV Index">
              {current.uvIndex} (Moderate)
            </StatRow>
            <StatRow icon={<Eye size={14} style={{ color: 'rgba(209,250,229,0.7)' }} />} label="Visibility">
              {current.visibility}
            </StatRow>
            <StatRow icon={<Thermometer size={14} style={{ color: '#f87171' }} />} label="Feels Like">
              {current.feelsLike}°F
            </StatRow>
          </div>
        </div>
      </div>

      {/* Weekend Spotlight */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h2
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 600,
              fontSize: 22,
              color: '#004d34',
            }}
          >
            Weekend Forecast
          </h2>
          <span
            className="px-2 py-0.5 rounded-sm"
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              background: '#fcd400',
              color: '#004d34',
            }}
          >
            Golf Days
          </span>
        </div>
        <div className="flex gap-4">
          {weekendDays.map(day => (
            <WeekendDayCard key={day.dayShort} day={day} />
          ))}
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div>
        <h2
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 600,
            fontSize: 22,
            color: '#004d34',
            marginBottom: 16,
          }}
        >
          7-Day Forecast
        </h2>
        <div
          className="rounded-sm overflow-hidden"
          style={{ boxShadow: '0 2px 16px rgba(8,32,19,0.06)' }}
        >
          <div className="flex flex-col gap-0">
            {weekWeather.map((day, i) => (
              <div
                key={day.dayShort}
                style={{ borderTop: i > 0 ? '1px solid rgba(190,201,193,0.15)' : 'none' }}
              >
                <SevenDayCard day={day} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Golf Tip */}
      <div
        className="mt-8 px-6 py-5 rounded-sm flex items-center gap-4"
        style={{ background: '#ecfdf5' }}
      >
        <span style={{ fontSize: 24 }}>⛳</span>
        <div>
          <div
            style={{
              fontFamily: "'Noto Serif', serif",
              fontSize: 15,
              fontWeight: 600,
              color: '#004d34',
              marginBottom: 2,
            }}
          >
            Prime Golf Window This Weekend
          </div>
          <div
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: 13,
              color: '#3f4943',
              lineHeight: 1.6,
            }}
          >
            Temperatures peak 67–74°F with clear skies and light winds across Friday–Sunday.
            Book your tee time before 10 AM to avoid afternoon sun and potential wind pickup.
          </div>
        </div>
      </div>
    </div>
  );
}
