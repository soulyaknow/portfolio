/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Times New Roman", "sans-serif"],
        "poppins": ['Poppins', 'sans-serif']
      },
      screens:{
        'xs': '475px',
        'md': '768px',
      }
    },
  },
  plugins: [],
}

