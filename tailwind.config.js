/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1B2B',
          light: '#142B45',
          dark: '#081624',
        },
        cyan: {
          DEFAULT: '#00C6FF',
          dark: '#0099CC',
        },
        purple: {
          DEFAULT: '#7F00FF',
          light: '#9933FF',
        },
        accent: {
          green: '#00F5A0',
          yellow: '#FFD600',
          red: '#FF3366',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom right, rgba(0, 198, 255, 0.05), rgba(127, 0, 255, 0.05))',
      },
    },
  },
  plugins: [],
};