/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'gt-america': ['GT America Regular', 'sans-serif'],
      'gt-america-bold': ['GT America Bold', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

