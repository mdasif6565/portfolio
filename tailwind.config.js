/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true
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
      // TODO: need to fix this class name
      colors:{
      'secondary':'#3D3E42',
      'secondary-dark':'#31333B',
      'yellow-light':'#FFC86B',
      'dark-mate':'#34353A',
      'dark-light':'#9a9b9c',
      },
    },
  },
  plugins: [],
}