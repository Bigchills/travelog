/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./file/*.{html,js}"],
  theme: {
    screens: {
      sm:'450px',
      md:'780px',
      lg:'1110px',
      xl:'1440px'
    },

 extend: {
    colors:{
      purpleShade:'rgba(93, 80, 198, 1)',
      lightGray:'rgba(25, 24, 37, 0.5)',
      brightPink:'rgba(248, 94, 159, 1)',
      orangeShade:'rgba(255, 87, 34, 1)',
      blackShade:'rgba(25, 24, 37, 0.75)',
      brightGrey:'rgba(25, 24, 37, 1)',
      fadeOrange:'rgba(250, 205, 73, 0.3)',
      lightOrange:'rgb(245, 223, 211)',
    }
 },
  },
  plugins: [],
}

