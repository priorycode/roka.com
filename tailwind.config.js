/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        colorprimary: '#0C4651',
      }
    },
  },
  plugins: [],
}

