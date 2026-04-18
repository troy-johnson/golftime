import { useState } from 'react';
import { Heart, MapPin, Star, ExternalLink, Clock, Users, Radio } from 'lucide-react';
import type { Course, TeeTime } from '../data/mockData';
import { courseImages } from '../data/courseImages';
import { useApp } from '../context/AppContext';

type CourseCardCourse = Course & {
  access?: 'public' | 'private';
  provider?: 'chronogolf' | 'manual';
  bookingUrl?: string;
  liveTeeTimesEnabled?: boolean;
};

interface CourseCardProps {
  course: CourseCardCourse;
  groupSize: number;
  holesFilter: 'any' | '9' | '18';
  timeFilter: 'any' | 'morning' | 'midday' | 'afternoon';
}

interface ConsecutiveBlock {
  first: TeeTime;
  second: TeeTime;
  combinedAvailable: number;
}

function getConsecutiveBlocks(teeTimes: TeeTime[], holes: 9 | 18 | null): ConsecutiveBlock[] {
  const filtered = teeTimes
    .filter(time => (holes ? time.holes === holes : true) && time.available >= 4)
    .sort((a, b) => a.timeSort - b.timeSort);

  const blocks: ConsecutiveBlock[] = [];

  for (let index = 0; index < filtered.length - 1; index += 1) {
    const first = filtered[index];
    const second = filtered[index + 1];
    const timeDiff = second.timeSort - first.timeSort;

    if (timeDiff >= 5 && timeDiff <= 32 && first.holes === second.holes) {
      blocks.push({
        first,
        second,
        combinedAvailable: Math.min(first.available, second.available) * 2,
      });
    }
  }

  return blocks;
}

function filterTeeTimes(
  teeTimes: TeeTime[],
  holesFilter: 'any' | '9' | '18',
  timeFilter: 'any' | 'morning' | 'midday' | 'afternoon'
) {
  return teeTimes.filter(time => {
    const holesOk = holesFilter === 'any' || time.holes === Number(holesFilter);
    const timeOk = timeFilter === 'any' || time.period === timeFilter;
    return holesOk && timeOk;
  });
}

export function CourseCard({ course, groupSize, holesFilter, timeFilter }: CourseCardProps) {
  const { isSaved, toggleSaved } = useApp();
  const saved = isSaved(course.id);
  const [selectedHoles, setSelectedHoles] = useState<9 | 18>(course.holes.includes(18) ? 18 : 9);
  const [showAll, setShowAll] = useState(false);

  const bookingHref = course.bookingUrl ?? course.website;
  const img = courseImages[course.imageId] ?? courseImages['murray-parkway'];
  const isLargeGroup = groupSize >= 5;
  const holesForDisplay = holesFilter !== 'any' ? (Number(holesFilter) as 9 | 18) : selectedHoles;

  let visibleTimes: TeeTime[] = [];
  let consecutiveBlocks: ConsecutiveBlock[] = [];

  if (isLargeGroup) {
    consecutiveBlocks = getConsecutiveBlocks(filterTeeTimes(course.teeTimes, holesFilter, timeFilter), holesFilter !== 'any' ? holesForDisplay : null).filter(
      block => block.first.holes === holesForDisplay
    );
    if (!showAll) consecutiveBlocks = consecutiveBlocks.slice(0, 4);
  } else {
    const available = filterTeeTimes(course.teeTimes, holesFilter, timeFilter).filter(
      time => time.available >= groupSize && time.holes === holesForDisplay
    );
    visibleTimes = showAll ? available : available.slice(0, 8);
  }

  const allHolesTimes = filterTeeTimes(course.teeTimes, holesFilter, timeFilter);
  const totalAvailable = isLargeGroup
    ? getConsecutiveBlocks(allHolesTimes, null).length
    : allHolesTimes.filter(time => time.available >= groupSize).length;

  const walkingRange = course.teeTimes.filter(time => time.holes === holesForDisplay).map(time => time.walkingPrice);
  const cartRange = course.teeTimes.filter(time => time.holes === holesForDisplay).map(time => time.cartPrice);

  const priceMin = walkingRange.length ? Math.min(...walkingRange) : null;
  const priceMax = walkingRange.length ? Math.max(...walkingRange) : null;
  const cartMin = cartRange.length ? Math.min(...cartRange) : null;
  const cartMax = cartRange.length ? Math.max(...cartRange) : null;

  return (
    <div className="rounded-sm overflow-hidden" style={{ background: '#ffffff', boxShadow: '0 4px 24px rgba(8,32,19,0.07)' }}>
      <div className="relative h-44 overflow-hidden">
        <img src={img} alt={course.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%)' }} />

        <button
          onClick={() => toggleSaved(course.id)}
          className="absolute top-3 right-3 p-2 rounded-full transition-colors"
          style={{ background: 'rgba(6,78,59,0.7)', backdropFilter: 'blur(8px)', border: 'none', cursor: 'pointer' }}
        >
          <Heart size={16} fill={saved ? '#f87171' : 'none'} style={{ color: saved ? '#f87171' : '#ecfdf5' }} />
        </button>

        <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-sm" style={{ background: 'rgba(6,78,59,0.8)', backdropFilter: 'blur(8px)' }}>
          <MapPin size={11} style={{ color: '#facc15' }} />
          <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, fontWeight: 700, color: '#ecfdf5', letterSpacing: '0.5px' }}>
            {course.distance} mi
          </span>
        </div>

        {course.holes.length > 1 && holesFilter === 'any' && (
          <div className="absolute bottom-3 right-3 flex gap-1">
            {course.holes.map(hole => (
              <button
                key={hole}
                onClick={() => setSelectedHoles(hole as 9 | 18)}
                className="px-2 py-0.5 rounded-sm text-xs transition-colors"
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  background: holesForDisplay === hole ? '#fcd400' : 'rgba(6,78,59,0.7)',
                  color: holesForDisplay === hole ? '#004d34' : '#ecfdf5',
                  border: 'none',
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {hole}H
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="px-5 pt-4 pb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 style={{ fontFamily: "'Noto Serif', serif", fontWeight: 600, fontSize: 16, color: '#082013', letterSpacing: '-0.2px', marginBottom: 2 }}>
              {course.name}
            </h3>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1">
                <Star size={12} fill="#fcd400" style={{ color: '#fcd400' }} />
                <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 12, color: '#3f4943' }}>{course.rating}</span>
                <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 12, color: 'rgba(63,73,67,0.6)' }}>({course.reviewCount})</span>
              </div>

              <span
                className="px-1.5 py-0.5 rounded-sm"
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  background: '#ecfdf5',
                  color: '#047857',
                }}
              >
                {course.access === 'private' ? 'Private' : 'Public'}
              </span>

              <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 12, color: 'rgba(63,73,67,0.6)' }}>
                Par {course.par} · {(course.yards / 1000).toFixed(1)}k yds
              </span>
            </div>
          </div>

          <a href={bookingHref} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 p-1.5 rounded transition-colors" style={{ color: '#047857' }}>
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1 px-2 py-1 rounded-sm" style={{ background: '#f8fafc' }}>
            <Radio size={11} style={{ color: course.liveTeeTimesEnabled ? '#047857' : '#64748b' }} />
            <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, color: '#3f4943' }}>
              {course.liveTeeTimesEnabled ? 'Chronogolf live tee times' : 'Tracked, provider pending'}
            </span>
          </div>
          <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, color: 'rgba(63,73,67,0.6)' }}>{course.city}</span>
        </div>

        <div className="flex items-center gap-4 mt-3 pt-3" style={{ borderTop: '1px solid rgba(190,201,193,0.2)' }}>
          <div className="flex items-center gap-1.5">
            <span style={{ fontSize: 16 }}>🚶</span>
            <div>
              <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, color: 'rgba(63,73,67,0.6)', display: 'block', lineHeight: 1 }}>
                Walking
              </span>
              <span style={{ fontFamily: "'Noto Serif', serif", fontSize: 15, fontWeight: 600, color: '#004d34' }}>
                {priceMin === null ? '—' : `$${priceMin}–$${priceMax}`}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span style={{ fontSize: 16 }}>🛒</span>
            <div>
              <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, color: 'rgba(63,73,67,0.6)', display: 'block', lineHeight: 1 }}>
                With Cart
              </span>
              <span style={{ fontFamily: "'Noto Serif', serif", fontSize: 15, fontWeight: 600, color: '#004d34' }}>
                {cartMin === null ? '—' : `$${cartMin}–$${cartMax}`}
              </span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Clock size={12} style={{ color: '#047857' }} />
            <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 12, color: '#047857', fontWeight: 600 }}>
              {totalAvailable} {isLargeGroup ? 'blocks' : 'times'} available
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 pb-4">
        {course.teeTimes.length === 0 ? (
          <div className="rounded-sm px-4 py-4" style={{ background: '#f8fafc', border: '1px solid rgba(148,163,184,0.15)' }}>
            <p style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 13, color: '#3f4943', marginBottom: 10 }}>
              {course.liveTeeTimesEnabled
                ? 'No tee times came back for this date and filter yet. Try refreshing or book direct with the course.'
                : 'We’re tracking this course, but its tee-time system is not integrated yet.'}
            </p>
            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-sm no-underline"
              style={{ background: '#004d34', color: '#ffffff', fontFamily: "'Public Sans', sans-serif", fontSize: 12, fontWeight: 700 }}
            >
              Check course site
              <ExternalLink size={12} />
            </a>
          </div>
        ) : isLargeGroup ? (
          <>
            <div className="flex items-center gap-1.5 mb-2">
              <Users size={12} style={{ color: '#705d00' }} />
              <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase', color: '#705d00' }}>
                Consecutive Blocks (5+ Players)
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {consecutiveBlocks.length === 0 ? (
                <p style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 13, color: 'rgba(63,73,67,0.6)' }}>
                  No consecutive blocks available for this filter.
                </p>
              ) : (
                consecutiveBlocks.map((block, index) => <ConsecutiveBlockChip key={`${block.first.id}-${index}`} block={block} href={bookingHref} />)
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-wrap gap-2">
            {visibleTimes.length === 0 ? (
              <p style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 13, color: 'rgba(63,73,67,0.6)' }}>
                No tee times available for this filter.
              </p>
            ) : (
              visibleTimes.map(time => <TeeTimeChip key={time.id} teeTime={time} href={bookingHref} />)
            )}
          </div>
        )}

        {totalAvailable > (isLargeGroup ? 4 : 8) && course.teeTimes.length > 0 && (
          <button
            onClick={() => setShowAll(value => !value)}
            className="mt-3 text-sm"
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: 12,
              color: '#047857',
              fontWeight: 600,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              letterSpacing: '0.3px',
            }}
          >
            {showAll ? 'Show fewer' : `+ Show all ${totalAvailable} ${isLargeGroup ? 'blocks' : 'times'}`}
          </button>
        )}
      </div>
    </div>
  );
}

function TeeTimeChip({ teeTime, href }: { teeTime: TeeTime; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center px-3 py-2 rounded-sm transition-all hover:scale-105 no-underline"
      style={{ background: '#ecfdf5', minWidth: 76, cursor: 'pointer' }}
    >
      <span style={{ fontFamily: "'Noto Serif', serif", fontSize: 14, fontWeight: 600, color: '#004d34', letterSpacing: '-0.2px' }}>
        {teeTime.time}
      </span>
      <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 10, color: '#047857', letterSpacing: '0.3px' }}>
        {teeTime.holes}H · ${teeTime.walkingPrice}
      </span>
      <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 10, color: 'rgba(63,73,67,0.6)' }}>
        {teeTime.available} spot{teeTime.available !== 1 ? 's' : ''}
      </span>
    </a>
  );
}

function ConsecutiveBlockChip({ block, href }: { block: ConsecutiveBlock; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline group">
      <div className="flex items-stretch rounded-sm overflow-hidden transition-all hover:scale-[1.01]" style={{ background: '#ecfdf5', border: '1px solid rgba(4,120,87,0.15)' }}>
        <div className="px-3 py-2.5 flex-1">
          <div style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '0.8px', color: '#047857', textTransform: 'uppercase', marginBottom: 2 }}>
            Tee 1
          </div>
          <div style={{ fontFamily: "'Noto Serif', serif", fontSize: 15, fontWeight: 600, color: '#004d34' }}>{block.first.time}</div>
          <div style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, color: '#3f4943' }}>{block.first.holes}H · 4 players</div>
        </div>

        <div className="flex items-center px-2" style={{ background: 'rgba(4,120,87,0.08)', color: '#047857' }}>
          <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, fontWeight: 700 }}>+</span>
        </div>

        <div className="px-3 py-2.5 flex-1">
          <div style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '0.8px', color: '#047857', textTransform: 'uppercase', marginBottom: 2 }}>
            Tee 2
          </div>
          <div style={{ fontFamily: "'Noto Serif', serif", fontSize: 15, fontWeight: 600, color: '#004d34' }}>{block.second.time}</div>
          <div style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 11, color: '#3f4943' }}>{block.second.holes}H · 4 players</div>
        </div>

        <div className="flex flex-col items-end justify-center px-4 gap-1" style={{ background: '#004d34', minWidth: 90 }}>
          <div style={{ fontFamily: "'Noto Serif', serif", fontSize: 14, fontWeight: 600, color: '#ecfdf5' }}>${block.first.walkingPrice}/ea</div>
          <div style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 9, color: 'rgba(209,250,229,0.7)' }}>🛒 ${block.first.cartPrice}/ea</div>
          <div className="mt-1 px-2 py-0.5 rounded-sm" style={{ background: '#fcd400' }}>
            <span style={{ fontFamily: "'Public Sans', sans-serif", fontSize: 9, fontWeight: 700, color: '#004d34', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Book</span>
          </div>
        </div>
      </div>
    </a>
  );
}
