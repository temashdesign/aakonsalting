/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ak-darkblue': '#102D58',
        'ak-blue': '#2E62B0',
        'ak-gold': '#F7B66A',
      },
      fontFamily: {
        sans: ['var(--font-raleway)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
}
