import { NavBar } from '../components/NavBar';

interface RootProps {
  children?: React.ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f0fdf4' }}>
      <NavBar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
