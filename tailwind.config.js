/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, // or 'media' or 'class'
  content: [],
  theme: {
   extend: {
    screens: {
      'xs': '275px', // Add the 'xs' breakpoint
    },
  },
  plugins: [],
 } 
};

