'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroImage = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

  useEffect(() => {
    const handleChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setTheme(e.newValue || '');
      }
    };

    window.addEventListener('storage', handleChange);

    // Cleanup to prevent memory leak
    return () => {
      window.removeEventListener('storage', handleChange);
    };
  }, []);

  return (
    <>
      {theme === 'dark' ? (
        <>
          <Image
            src="/hero-desktop-dark.png"
            width={1000}
            height={760}
            className="hidden md:block rounded-md"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile-dark.png"
            className="md:hidden"
            width={560}
            height={620}
            alt="Mobile"
          />
        </>
      ) : (
        <>
          <Image
            src="/hero-desktop.png"
            width={700}
            height={550}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            className="md:hidden"
            width={560}
            height={620}
            alt="Mobile"
          />
        </>
      )}
    </>
  );
}

export default HeroImage
