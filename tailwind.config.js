/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors:{
        primary:"#2A2D3A",
        secondary:"#242734",
        "primary-text":"#858792",
        "primary-border":"#3b3d49",
        "secondary-bg":"#2e303d"
      },
      fontFamily:{
        primary:'Poppins, sans-serif',
        secondary:'"Cormorant Garamond", serif'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '4rem',
        },
      }
    },
  },
  plugins: [],
}

