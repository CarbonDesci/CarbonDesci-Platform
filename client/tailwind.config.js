/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#10B981',
        secondary: '#3B82F6',
        background: {
          light: '#F3F4F6',
          dark: '#111827',
        },
        text: {
          light: '#F9FAFB',
          dark: '#111827',
        },
      },
    },
  },
  plugins: [],
} 