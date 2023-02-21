/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.css", "./src/**/*.html"],
  theme: {
    extend: {
      // colors: {
      //   'light-yellow': '#FFF200',
      // },
      // fontFamily: {
      //   'Trebuchet': 'TrebuchetMS, Helvetica, sans-serif',
      // },
      backgroundImage: {
        'top-gradient': "linear-gradient(180.2deg, #1F1032 36.86%, rgba(31, 16, 50, 0) 99.82%)",
        'bottom-gradient': "linear-gradient(180.2deg, #1F1032 48.86%, rgba(31, 16, 50, 0) 99.82%)",
        'percent-gradient': "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #95EDFF 17.19%, rgba(149, 237, 255, 0) 100%)",
        'free-spins-gradient': "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #95EDFF 8.85%, rgba(149, 237, 255, 0) 100%)",
      }
      
    },
  },
  plugins: [],
}
