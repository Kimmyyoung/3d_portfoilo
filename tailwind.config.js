/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary": "#050816",
        "secondary": "#D1D5DB",
        "tertiary": "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #8AE9B3",
        lightModeCard : "0px 35px 120px -15px #c1e6d1",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        'titillium': ["Titillium", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};