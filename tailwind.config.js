/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        raleway: ["Raleway", 'sans-serif'],
        roboto: ["Roboto Condensed", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        '1xl': '0 5px 15px #737373',
        '2xl': '0 5px 5px #333',
        '3xl': '0 2px 5px #333;'
      }
    },
  },
  plugins: [],
}

