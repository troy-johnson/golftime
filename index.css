import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface SearchParams {
  location: string;
  radius: number;
  date: string;
  timeWindow: 'any' | 'morning' | 'midday' | 'afternoon';
  holes: 'any' | '9' | '18';
  groupSize: number;
}

interface AppContextType {
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
  savedCourseIds: string[];
  toggleSaved: (courseId: string) => void;
  isSaved: (courseId: string) => boolean;
}

const defaultSearch: SearchParams = {
  location: 'Murray, UT',
  radius: 25,
  date: '2026-04-18',
  timeWindow: 'any',
  holes: 'any',
  groupSize: 2,
};

const AppContext = createContext<AppContextType>({
  searchParams: defaultSearch,
  setSearchParams: () => {},
  savedCourseIds: [],
  toggleSaved: () => {},
  isSaved: () => false,
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [searchParams, setSearchParams] = useState<SearchParams>(() => {
    try {
      const stored = localStorage.getItem('golfTimeSearch');
      return stored ? JSON.parse(stored) : defaultSearch;
    } catch {
      return defaultSearch;
    }
  });

  const [savedCourseIds, setSavedCourseIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('golfTimeSaved');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('golfTimeSearch', JSON.stringify(searchParams));
  }, [searchParams]);

  useEffect(() => {
    localStorage.setItem('golfTimeSaved', JSON.stringify(savedCourseIds));
  }, [savedCourseIds]);

  const toggleSaved = useCallback((courseId: string) => {
    setSavedCourseIds(prev =>
      prev.includes(courseId) ? prev.filter(id => id !== courseId) : [...prev, courseId]
    );
  }, []);

  const isSaved = useCallback(
    (courseId: string) => savedCourseIds.includes(courseId),
    [savedCourseIds]
  );

  return (
    <AppContext.Provider value={{ searchParams, setSearchParams, savedCourseIds, toggleSaved, isSaved }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
