module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "dark-purple": "#081A51",
            "medium-purple": "#081a51ad",
            "light-purple": "#081a5152",
            "dark-gray": "#0D062D",
            "light-white": "rgba(255, 255, 255, 0.17)",
        },
        zIndex: {
            '100': 100,
            '200': 200,
        }
    },
  },
  plugins: [],
}
