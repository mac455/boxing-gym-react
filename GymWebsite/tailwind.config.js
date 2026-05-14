/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        saira: ['"Saira Condensed"', 'sans-serif'],
      },
      colors: {
        cream: 'rgb(250, 243, 239)',
        charcoal: 'rgb(23, 22, 22)',
      },
    },
  },
  plugins: [],
}
