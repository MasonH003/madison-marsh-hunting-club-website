/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'MMHCBrown' : '#362706',
        'MMHCGreen' : '#464E2E',
        'MMHCOlive' : '#ACB992',
        'MMHCCream' : '#E9E5D6'
      }
    },
  },
  plugins: [],
}