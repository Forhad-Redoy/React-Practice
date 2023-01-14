/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      xs: {'min': '320px','max': '480px'},
      sm: {'min': '481px','max': '768px'},
      md: {'min': '769px','max': '1024px'},
      lg: {'min':'1025px','max':'1400px'},
      xl: {'min':'1441px'},
    },
    extend: {},
  },
  plugins: [],
}
