'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  changeTheme: (theme: string) => {},
});

export const ClientThemeWrapper = ({ children }: any) => {
  const { theme } = useContext(ThemeContext);

  return <div data-theme={theme}>{children}</div>;
}

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    if (storedTheme !== theme) {
      setTheme(storedTheme);
    }
    setIsMounted(true);
  }, [theme]);

  if (!isMounted) return null;

  const changeTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};