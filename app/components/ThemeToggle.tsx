'use client';

import { useTheme } from './ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={toggleTheme}
        className="p-2.5 rounded-xl glass-card
                   hover:border-accent/30
                   transform hover:scale-110 
                   transition-all duration-300 ease-out
                   hover:shadow-lg hover:shadow-accent/10
                   group"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <SunIcon
            className="w-5 h-5 text-accent
                       transition-all duration-500
                       [filter:drop-shadow(0_0_8px_rgba(132,204,22,0.4))]
                       group-hover:[filter:drop-shadow(0_0_14px_rgba(132,204,22,0.6))]"
          />
        ) : (
          <MoonIcon
            className="w-5 h-5 text-muted
                       transition-all duration-500
                       group-hover:text-text
                       [filter:drop-shadow(0_0_6px_rgba(0,0,0,0.15))]"
          />
        )}
      </button>
    </div>
  );
}
