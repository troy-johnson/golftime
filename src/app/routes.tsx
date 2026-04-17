import { Routes, Route, Outlet } from 'react-router';
import { Root } from './pages/Root';
import { SearchPage } from './pages/SearchPage';
import { ResultsPage } from './pages/ResultsPage';
import { WeatherPage } from './pages/WeatherPage';
import { SavedCoursesPage } from './pages/SavedCoursesPage';

function Layout() {
  return (
    <Root>
      <Outlet />
    </Root>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<SearchPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="weather" element={<WeatherPage />} />
        <Route path="saved" element={<SavedCoursesPage />} />
      </Route>
    </Routes>
  );
}
