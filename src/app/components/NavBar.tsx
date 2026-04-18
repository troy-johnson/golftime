import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import svgPaths from '../../imports/svg-498ksxb0qk';

export function NavBar() {
  const location = useLocation();
  const { savedCourseIds } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ background: 'rgba(6,78,59,0.92)', backdropFilter: 'blur(14px)' }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
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
              fontSize: 18,
              color: '#ecfdf5',
              letterSpacing: '-0.5px',
              lineHeight: 1,
            }}
          >
            GolfTime
          </span>
        </Link>

        {/* Nav Links - hidden on mobile, shown on md+ */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavLink to="/results" active={isActive('/results')}>
            FIND TIMES
          </NavLink>
          <NavLink to="/weather" active={isActive('/weather')}>
            WEATHER
          </NavLink>
          <NavLink to="/saved" active={isActive('/saved')}>
            SAVED
            {savedCourseIds.length > 0 && (
              <span
                className="ml-1 inline-flex items-center justify-center rounded-full text-[10px] w-4 h-4"
                style={{ background: '#fcd400', color: '#004d34', fontWeight: 700 }}
              >
                {savedCourseIds.length}
              </span>
            )}
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center p-1.5 rounded hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={20} style={{ color: '#ecfdf5' }} />
          ) : (
            <Menu size={20} style={{ color: '#ecfdf5' }} />
          )}
        </button>

        {/* Right Icon - placeholder */}
        <div className="hidden md:block" />
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 py-2" style={{ background: 'rgba(6,78,59,0.98)' }}>
          <div className="flex flex-col px-4">
            <MobileNavLink to="/results" active={isActive('/results')} onClick={() => setMobileMenuOpen(false)}>
              FIND TIMES
            </MobileNavLink>
            <MobileNavLink to="/weather" active={isActive('/weather')} onClick={() => setMobileMenuOpen(false)}>
              WEATHER
            </MobileNavLink>
            <MobileNavLink to="/saved" active={isActive('/saved')} onClick={() => setMobileMenuOpen(false)}>
              SAVED COURSES
              {savedCourseIds.length > 0 && (
                <span
                  className="ml-1.5 inline-flex items-center justify-center rounded-full text-[10px] w-4 h-4"
                  style={{ background: '#fcd400', color: '#004d34', fontWeight: 700 }}
                >
                  {savedCourseIds.length}
                </span>
              )}
            </MobileNavLink>
          </div>
        </div>
      )}

      {/* Gradient bar */}
      <div className="h-[3px] w-full">
        <div className="w-full h-full" style={{ background: 'linear-gradient(90deg, #fcd400 0%, #22c55e 50%, #059669 100%)' }} />
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

function MobileNavLink({
  to,
  active,
  onClick,
  children,
}: {
  to: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center justify-between no-underline py-2 transition-colors"
      style={{
        fontFamily: "'Public Sans', sans-serif",
        fontWeight: active ? 700 : 400,
        fontSize: 12,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        color: active ? '#facc15' : 'rgba(209,250,229,0.85)',
      }}
    >
      {children}
    </Link>
  );
}
