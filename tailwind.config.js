/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime-main': '#28D72F'
      }
    },
    fontFamily:{
      poppins : ["Poppins", 'sans-serif']
    },
  },
  plugins: [],
}

