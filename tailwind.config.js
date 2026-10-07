/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        midnight: {
          navy: '#0B1020',
          DEFAULT: '#0B1020',
        },
        surface: {
          dark: '#111827',
          light: '#FFFFFF',
          DEFAULT: '#111827',
        },
        elevated: {
          dark: '#172033',
          light: '#F1F5F9',
          DEFAULT: '#172033',
        },
        primary: {
          indigo: '#6366F1',
          DEFAULT: '#6366F1',
          light: '#4F46E5',
        },
        secondary: {
          cyan: '#22D3EE',
          DEFAULT: '#22D3EE',
          light: '#0891B2',
        },
        text: {
          main: '#F8FAFC',
          secondary: '#94A3B8',
          dark: '#0F172A',
          darkSecondary: '#475569',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
