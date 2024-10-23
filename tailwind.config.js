/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        'PlusJakarta':['Plus Jakarta Sans', 'sans-serif'],
      },
      colors:{
        'primary':'#8ABAFF',
        'secondary':'#0069FE',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

