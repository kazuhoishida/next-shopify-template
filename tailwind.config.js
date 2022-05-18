module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        112: "28rem",
        120: "30rem",
      }),
      minHeight: (theme) => ({
        80: "20rem",
      }),
      colors: {
        palette: {
          lighter: "#F5F3FF",
          light: "#DDD6FE",
          primary: "#000000",
          dark: "#4C1D95",
        },
      },
      fontSize: {
        9: "0.9rem",
        10: "1.0rem",
        11: "1.1rem",
        12: "1.2rem",
        13: "1.3rem",
        14: "1.4rem",
        15: "1.5rem",
        16: "1.6rem",
        18: "1.8rem",
        20: "2.0rem",
        22: "2.2rem",
        24: "2.4rem",
        26: "2.6rem",
        28: "2.8rem",
        32: "3.2rem",
        36: "3.6rem",
        40: "4.0rem",
        48: "4.8rem",
        52: "5.2rem",
        56: "5.6rem",
        60: "6.0rem",
        80: "8.0rem",
        100: "10.0rem",
        110: "11.0rem",
        120: "12.0rem",
        150: "15.0rem",
      },
      fontFamily: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
}
