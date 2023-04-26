/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backfaceVisibility-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ml: "1060px",
      },
      boxShadow: {
        silder: "0 0 10px 0 rgba(0, 0, 0, 0.7)",
        "card-hover": "0 0 0 rgba(0,0,0,.4)",
        card: "0 10px 15px 0 rgba(0,0,0,.4)",
        input: "0 0 5px #d8d8d8",
      },
      fontFamily: {
        mont: "Montserrat,sans-serif",
        lato: "Lato, sans-serif",
      },
      transitionProperty: {
        height: "height",
        right: "right",
        every: "all",
      },
      keyframes: {
        loading: {
          "0%, 80%, 100%": {
            boxShadow: "0 0 #fff",
            height: "4rem",
            backgroundColor: "#fff",
          },
          "40%": {
            boxShadow: "0 -2rem #fff",
            height: "5rem",
            backgroundColor: "#fff",
          },
        },
      },
      animation: {
        loading: "loading 1s ease-in-out infinite",
        loadingSlow: "loading 1s 0.16s ease-in-out infinite",
        loadingSlower: "loading 1s 0.32s ease-in-out infinite",
      },
      backgroundImage: {
        "banner-pattern": "url('/images/banner.jpg')",
        "project-pattern": "url('/images/project.png')",
        "shield-pattern": "url('/images/shield.svg')",
      },
      backgroundPosition: {
        half: "50% 50%",
      },
      backgroundSize: {
        "project-big": "160% auto",
        "project-normal": "100% auto",
      },
    },
  },
  plugins: [backfaceVisibility],
};
