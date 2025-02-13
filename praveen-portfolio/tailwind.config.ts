import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          dark: 'var(--background-dark)',
        },
        foreground: {
          DEFAULT: 'var(--foreground)',
          dark: 'var(--foreground-dark)',
        },
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 12px rgba(250,204,21,0.6))',
            transform: 'scale(1)',
          },
          '50%': {
            filter: 'drop-shadow(0 0 16px rgba(250,204,21,0.8))',
            transform: 'scale(1.05)',
          },
        },
        'border-flow': {
          '0%': { 
            transform: 'translateX(-100%)',
          },
          '100%': { 
            transform: 'translateX(100%)',
          }
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'border-flow': 'border-flow 1.5s ease-in-out infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
