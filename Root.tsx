import { Link, useLocation } from 'react-router';
import { Bell, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';
import svgPaths from '../../imports/svg-498ksxb0qk';
import imgGradient from 'figma:asset/93ebc9d7f2bc1c25d4ec06c8311466023a117bdb.png';

export function NavBar() {
  const location = useLocation();
  const { savedCourseIds } = useApp();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ background: 'rgba(6,78,59,0.92)', backdropFilter: 'blur(14px)' }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="relative" style={{ width: 16, height: 20 }}>
            <svg viewBox="0 0 16 20" fill="none" className="w-full h-full">
              <path d={svgPaths.p164b49c0} fill="#ECFDF5" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 22,
              color: '#ecfdf5',
              letterSpacing: '-0.5px',
              lineHeight: 1,
            }}
          >
            GolfTime
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <NavLink to="/results" active={isActive('/results')}>
            FIND TIMES
          </NavLink>
          <NavLink to="/weather" active={isActive('/weather')}>
            WEATHER
          </NavLink>
          <NavLink to="/saved" active={isActive('/saved')}>
            SAVED COURSES
            {savedCourseIds.length > 0 && (
              <span
                className="ml-1.5 inline-flex items-center justify-center rounded-full text-[10px] w-4 h-4"
                style={{ background: '#fcd400', color: '#004d34', fontWeight: 700 }}
              >
                {savedCourseIds.length}
              </span>
            )}
          </NavLink>
        </div>

        {/* Right Icon */}
        <button className="flex items-center justify-center p-1.5 rounded hover:bg-white/10 transition-colors">
          <Bell size={18} style={{ color: '#ecfdf5' }} />
        </button>
      </div>

      {/* Gradient bar */}
      <div className="h-[3px] w-full">
        <img src={imgGradient} alt="" className="w-full h-full object-cover pointer-events-none" />
      </div>
    </nav>
  );
}

function NavLink({
  to,
  active,
  children,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="flex items-center no-underline relative pb-1.5 transition-colors"
      style={{
        fontFamily: "'Public Sans', sans-serif",
        fontWeight: active ? 700 : 400,
        fontSize: 11,
        letterSpacing: '1.2px',
        textTransform: 'uppercase',
        color: active ? '#facc15' : 'rgba(209,250,229,0.85)',
        borderBottom: active ? '2px solid #facc15' : '2px solid transparent',
      }}
    >
      {children}
    </Link>
  );
}
