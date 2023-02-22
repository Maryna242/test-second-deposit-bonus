/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.css", "./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'SentenceDEMO': 'SentenceDEMO',
      },
      backgroundImage: {
        'top-gradient': "linear-gradient(180.2deg, #1F1032 36.86%, rgba(31, 16, 50, 0) 99.82%)",
        'bottom-gradient': "linear-gradient(180.2deg, #1F1032 48.86%, rgba(31, 16, 50, 0) 99.82%)",
        'percent-gradient': "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #95EDFF 17.19%, rgba(149, 237, 255, 0) 100%)",
        'free-spins-gradient': "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #95EDFF 8.85%, rgba(149, 237, 255, 0) 100%)",
        'monday-linear-gradient': "linear-gradient(180deg, rgba(58, 32, 80, 0) 0%, #3A2050 47.19%)",
        'monday-radial-gradient': "radial-gradient(50% 50% at 50% 50%, #E9C5F2 0%, rgba(255, 255, 255, 0) 100%)",
        'thursday-linear-gradient': "linear-gradient(180deg, rgba(58, 32, 80, 0) 0%, #3A2050 53.44%)",
        'thursday-radial-gradient': "radial-gradient(50% 50% at 50% 50%, #E283F9 0%, rgba(255, 255, 255, 0) 100%)",
        'vip-linear-gradient': "linear-gradient(180deg, rgba(61, 31, 85, 0) 0%, #3D1F55 26.76%)",
        'vip-radial-gradient': "radial-gradient(50% 50% at 50% 50%, #FFFFFF 28.65%, rgba(255, 255, 255, 0) 100%)",
        'main-bg-gradient': "linear-gradient(91.96deg, rgba(140, 68, 215, 0) 0.63%, rgba(140, 68, 215, 0.7) 48.85%, rgba(140, 68, 215, 0) 97.32%)"
      }
      
    },
  },
  plugins: [],
}
