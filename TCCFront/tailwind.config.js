/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs:'350px',

      sm:'768px',

      md: "1024px",

      lg: "1280px",

      xl: "1664px",

      'note1': '1050px',
      'note2': '1240px',
      'monitor1': '1500px',
      'monitor2': '1800px'
    },
  },
  plugins: [],
}

