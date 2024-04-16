/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    spacing: Array.from({ length: 10000 }).reduce((map, _, index) => {
      const value = ((index + 1) / 100).toFixed(2);
      const [integerPart, decimalPart] = value.split('.');
      const key = `${integerPart}-${decimalPart.padStart(2, '0')}`;
      const formattedValue = `${integerPart}.${decimalPart}`;
      map[key] = `${formattedValue}rem`;
      return map;
    }, {}),
    extend: {
      colors: {
        'primary-green': '#BDFF00',
        'word-black': '#141414',
        'module-black': '#242424'
      },
      fontSize: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [],
}