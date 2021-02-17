const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cyan': colors.cyan,
        'emerald': colors.emerald,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
