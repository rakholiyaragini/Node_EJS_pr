/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./dist/index.html','./dist/pages/*'],
  theme: {
    fontFamily: {
       'sans': ['"Quicksand"'],
       'serif': ['ui-serif', 'Dawning of a New Day'],
       'mono': ['ui-monospace', ''],
       'display': ['Oswald'],
       'body': [' font-family: "Quicksand", serif'],
    },
    colors: colors,
    extend: {},
  },
  plugins: [],
}
