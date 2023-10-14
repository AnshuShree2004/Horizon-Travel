/** @type {import('tailwindcss').Config} */


export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  
  

  theme: {
    fontFamily: {
      "satisy": ['Satisfy', 'sans-serif'],
      "john": ['Josefin Sans', 'sans-serif' ]
    },
    extend: {
     
    },
  },
  plugins: [require("daisyui")],
}



