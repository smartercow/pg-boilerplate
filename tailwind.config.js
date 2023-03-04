/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '500px',
      ...defaultTheme?.screens
    },
    extend: {
      colors: {},
      screens: {
        '3xl': '1600px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-debug-screens'),
    require('rippleui')
  ]
};
