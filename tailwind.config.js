/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e8f4ff',
          100: '#d0e9ff',
          200: '#a3d3ff',
          300: '#60b3f7',
          400: '#3a9de8',
          500: '#1C7AC2',
          600: '#1565a3',
          700: '#105086',
          800: '#0d3d68',
          900: '#0a2e50',
        },
        navy: {
          700: '#1a2a42',
          800: '#132035',
          900: '#0d1829',
          950: '#080f1c',
        },
        silver: {
          100: '#f4f6f8',
          200: '#e8ecf0',
          300: '#d0d6de',
          400: '#9aa4b0',
          500: '#6b7685',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
