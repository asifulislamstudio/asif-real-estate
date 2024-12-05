/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'ubuntu' : "'Ubuntu', sans-serif",
        'roboto' : "'Roboto', sans-serif"
      },
      backgroundImage : {
        "footerBG" : "url('/src/assets/footerbg.webp')",
        "playVidImg": "url('/src/assets/playvid.webp')"
      },
      colors: {
      'Primary' : "#00AD85"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

