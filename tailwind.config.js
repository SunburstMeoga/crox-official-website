/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      const value = ((index + 1) / 10).toFixed(1);
      const [integerPart, decimalPart] = value.split('.');
      const key = `${integerPart}-${decimalPart}`;
      const formattedValue = `${integerPart}.${decimalPart}`;
      map[key] = `${formattedValue}rem`;
      return map;
    }, {}),
    extend: {
      colors: {
        'primary-green': '#BDFF00',
        'word-black': '#141414',
        'module-black': '#242424',
        'title-gray': '#A9A9A9',
        'black-bg-2': 'rgba(0,0,0,.2)',
        'title-black': '#020202',
        'border-green': '#437820',
        'word-gray': '#5E5E5E'
      },
      // fontSize: ({ theme }) => ({
      //   ...theme("spacing"),
      // }),
    },
  },
  plugins: [],
}