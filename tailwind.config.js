/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      width: {
        '1/7': '45%',
        '1/8': '24%',
        '1/5':'32%',
      },

      fontFamily: {
        dosis: ["dosis", "sans-serif"],
      },
      colors:{
      'primary':'#FFC86B',
      'secondary':'#3D3E42',
      'secondary-dark':'#31333B',
      'secondary-light':'#9a9b9c',
      },
    },
  },
  plugins: [],
}