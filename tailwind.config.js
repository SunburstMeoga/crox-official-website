/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#BDFF00',
        'word-black': '#141414',
        'module-black': '#242424'
      }
    },
  },
  plugins: [],
}