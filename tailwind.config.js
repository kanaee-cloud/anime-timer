/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main : "linear-gradient(153deg, rgba(0,0,0,0.8295693277310925) 0%, rgba(0,0,0,0.4150035014005602) 100%),url(./assets/bg-main.jpg)",
      },
      colors: {
        primary: '#ffff',
        accent: '#17e9e1',
        secondary: '#f9d949'
      }
    },
  },
  plugins: [],
}

