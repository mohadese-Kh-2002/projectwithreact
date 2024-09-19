/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#757575',
        secondary:'#1B1717',
        background:'#959595'
      }
    },
  },
  plugins: [],
}

