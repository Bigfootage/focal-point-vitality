/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      colors: {
        navy: {
          950: '#050D1A',
          900: '#0B1828',
          800: '#0D1F35',
          700: '#122846',
          600: '#1A3A5C',
          500: '#1E4A73',
        },
        brand: {
          50: '#EBF5FF',
          100: '#D6EAFF',
          200: '#B0D4FF',
          300: '#7AB8F5',
          400: '#4A9FE8',
          500: '#1C7AC2',
          600: '#1565A8',
          700: '#0F4E87',
          800: '#0A3A65',
          900: '#062444',
        },
        silver: {
          100: '#F4F7FA',
          200: '#E8EDF3',
          300: '#D4DCE8',
          400: '#B8C4D4',
          500: '#9AAABB',
          600: '#7A8FA4',
          700: '#5C7089',
          800: '#3E5268',
          900: '#C8C8C8',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          300: '#D1D5DB',
          400: '#9CA3AF',
          600: '#4B5563',
        }
      },
    },
  },
  plugins: [],
};
