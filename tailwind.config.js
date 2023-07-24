/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'gt-america': ['GT America Regular', 'sans-serif'],
      'gt-america-bold': ['GT America Bold', 'sans-serif'],
    },
    screens: {
      laptop: '1201px',
      tablet: { max: '1200px' },
      phone: { max: '580px' },
    },
    extend: {},
  },
  plugins: [],
};
