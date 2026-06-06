/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          DEFAULT: '#140A0A',
          100: '#2A1414',
          200: '#4A2424',
          300: '#6A3434',
          400: '#8A4444',
          500: '#B45309',
        },
        muted: {
          DEFAULT: '#B45309',
          light: '#D97706',
        },
        surface: '#FEF3C7',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
