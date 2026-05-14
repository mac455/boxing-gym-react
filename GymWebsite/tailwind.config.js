/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
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
