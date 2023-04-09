/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
          'blue-dark': '#32325D',
          'blue-light': '#525F7F',
          'red': '#D4354D',
          'green': '#31CC6F',
          'gray-light': "#E9ECEF",
          'gray-dark': '#ADB5BD',
          'back': '#adebc5'
        }
    },
  },
  plugins: [],
}