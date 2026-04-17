import { Outlet } from 'react-router';
import { NavBar } from '../components/NavBar';

export function Root() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f0fdf4' }}>
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
