import { Link, useNavigate } from 'react-router';
import { Heart, Search, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { allCourses } from '../data/mockData';
import { CourseCard } from '../components/CourseCard';

export function SavedCoursesPage() {
  const { savedCourseIds, searchParams } = useApp();
  const navigate = useNavigate();

  const savedCourses = allCourses.filter(c => savedCourseIds.includes(c.id));

  function handleSearchSaved() {
    navigate('/results');
  }

  if (savedCourses.length === 0) {
    return (
      <div className="max-w-screen-lg mx-auto px-6 py-16 flex flex-col items-center text-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ background: '#ecfdf5' }}
        >
          <Heart size={32} style={{ color: '#004d34' }} />
        </div>
        <h1
          style={{
            fontFamily: "'Noto Serif', serif",
            fontWeight: 400,
            fontSize: 32,
            color: '#004d34',
            letterSpacing: '-0.5px',
            marginBottom: 12,
          }}
        >
          No Saved Courses Yet
        </h1>
        <p
          style={{
            fontFamily: "'Public Sans', sans-serif",
            fontSize: 16,
            color: '#3f4943',
            maxWidth: 400,
            lineHeight: 1.6,
            marginBottom: 32,
          }}
        >
          Tap the heart icon on any course card to save it here for quick access when planning your
          next round.
        </p>
        <Link
          to="/results"
          className="flex items-center gap-2 px-8 py-4 rounded-sm no-underline transition-opacity hover:opacity-90"
          style={{
            background: '#004d34',
            color: '#ffffff',
            fontFamily: "'Public Sans', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
          }}
        >
          Browse Courses
          <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      {/* Header */}
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
            Saved Courses
          </h1>
          <p
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: 14,
              color: '#3f4943',
            }}
          >
            {savedCourses.length} course{savedCourses.length !== 1 ? 's' : ''} saved to your group's favorites
          </p>
        </div>
        <button
          onClick={handleSearchSaved}
          className="flex items-center gap-2 px-6 py-3 rounded-sm transition-opacity hover:opacity-90"
          style={{
            background: '#004d34',
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Public Sans', sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
          }}
        >
          <Search size={13} />
          Search All Times
        </button>
      </div>

      {/* Saved Course Grid */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {savedCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            groupSize={searchParams.groupSize}
            holesFilter={searchParams.holes as 'any' | '9' | '18'}
            timeFilter={searchParams.timeWindow}
          />
        ))}
      </div>

      {/* Browse More */}
      <div
        className="mt-12 px-8 py-6 rounded-sm flex items-center justify-between"
        style={{ background: '#ecfdf5' }}
      >
        <div>
          <h3
            style={{
              fontFamily: "'Noto Serif', serif",
              fontWeight: 600,
              fontSize: 17,
              color: '#004d34',
              marginBottom: 4,
            }}
          >
            Discover More Courses
          </h3>
          <p
            style={{
              fontFamily: "'Public Sans', sans-serif",
              fontSize: 13,
              color: '#3f4943',
            }}
          >
            {allCourses.length - savedCourses.length} other public courses in the Salt Lake Valley area.
          </p>
        </div>
        <Link
          to="/results"
          className="flex items-center gap-2 px-6 py-3 rounded-sm no-underline transition-opacity hover:opacity-90"
          style={{
            background: '#004d34',
            color: '#ffffff',
            fontFamily: "'Public Sans', sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
          }}
        >
          Browse All
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
