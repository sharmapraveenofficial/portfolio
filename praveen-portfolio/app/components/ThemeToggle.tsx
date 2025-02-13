'use client';

import { useTheme } from './ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 
                   hover:bg-gray-300 dark:hover:bg-gray-700
                   transform hover:scale-110 
                   transition-all duration-300 ease-in-out
                   shadow-md hover:shadow-lg
                   group"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <SunIcon 
            className="w-6 h-6 text-yellow-500 
                       transform rotate-0 scale-100 transition-all duration-500
                       group-hover:text-yellow-400
                       [filter:drop-shadow(0_0_12px_rgba(250,204,21,0.6))]
                       animate-glow" 
          />
        ) : (
          <MoonIcon 
            className="w-6 h-6 text-gray-700
                       transform rotate-0 scale-100 transition-all duration-500
                       group-hover:text-gray-600
                       [filter:drop-shadow(0_0_12px_rgba(107,114,128,0.6))]
                       animate-glow" 
          />
        )}
      </button>
    </div>
  );
} 