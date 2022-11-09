/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      },
      colors: {
        "pry-clr-0": 'rgb(241, 245, 248)',
        "pry-clr-1": 'rgb(50, 77, 103)',
        "pry-clr-2": 'rgb(186, 93, 44)',
        "pry-clr-3": 'rgb(97, 125, 152)',
        "pry-clr-4": 'rgb(16, 42, 66)',
      },
      screens: {
        sm: "600px",
        md: "800px",
        lg: "1200px"
      }
    },
  },
  plugins: [],
}