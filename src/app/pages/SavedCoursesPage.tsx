import { Link, useNavigate } from 'react-router';
import { Heart, Search, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { catalogCourses, trackedCourseCount } from '../data/courseCatalog';
import { CourseCard } from '../components/CourseCard';

export function SavedCoursesPage() {
  const { savedCourseIds, searchParams } = useApp();
  const navigate = useNavigate();

  const savedCourses = catalogCourses.filter(course => savedCourseIds.includes(course.id));

  function handleSearchSaved() {
    navigate('/results');
  }

  if (savedCourses.length === 0) {
    return (
      <div className="max-w-screen-lg mx-auto px-6 py-16 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: '#ecfdf5' }}>
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
            maxWidth: 460,
            lineHeight: 1.6,
            marginBottom: 32,
          }}
        >
          Tap the heart icon on any course card to save it here. We’re currently tracking {trackedCourseCount} courses around 84123 and gradually wiring live tee times into each provider.
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
            {savedCourses.length} course{savedCourses.length !== 1 ? 's' : ''} saved to your group&apos;s shortlist
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

      <div className="mt-12 px-8 py-6 rounded-sm flex items-center justify-between" style={{ background: '#ecfdf5' }}>
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
            {trackedCourseCount - savedCourses.length} additional tracked courses are available across the Wasatch Front.
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
