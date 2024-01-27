'use client';

import { ThemeContext } from '@/app/lib/theme-context';
import React, { useContext } from 'react';

const ThemeSwitch = () => {
  const { changeTheme } = useContext(ThemeContext);
  const theme = localStorage.getItem('theme') || 'light';

  const toggleTheme = (e: any) => {
    const preferredTheme = e.target.checked ? 'dark' : 'light';
    changeTheme(preferredTheme);

    // Dispatch storage event
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'theme',
        oldValue: theme,
        newValue: preferredTheme,
        url: window.location.href,
        storageArea: localStorage,
      }),
    );
  };

  return (
    <div>
      <label
        className={`absolute right-12 top-[10.5rem] flex w-[90px] cursor-pointer gap-0 md:bottom-6 md:right-14 md:top-auto md:w-[100px] md:gap-2`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="scale-90 md:scale-100"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          type="checkbox"
          value={theme}
          checked={theme === 'dark'}
          onChange={toggleTheme}
          className="theme-controller toggle scale-90 md:scale-100"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="scale-90 md:scale-100"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
};

export default ThemeSwitch;
