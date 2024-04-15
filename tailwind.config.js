import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "35-custom": "35%", // This adds a custom width/height utility
      },
      backgroundColor: {
        "gradient-top": "#E6F3FA", // Define the gradient's top color
      },
      height: {
        "1/2": "50%",
      },
      borderRadius: {
        custom: "20px", // If rounded-lg is not 20px
      },
      backgroundImage: (theme) => ({
        "gradient-to-t": `linear-gradient(0, ${theme("backgroundColor.gradient-top")} 0%, rgba(255, 255, 255, 0.00) 100%)`, // Add custom gradient
        "custom-gradient":
          "linear-gradient(0deg, #000 1.10%, rgba(118, 45, 17, 0.51) 68.60%, rgba(240, 92, 34, 0.00) 100%);",
      }),
    },
    colors: {
      ctOrange1: "#F4F2F1",
      ctWhite: "#FFF",
      ct373: "#37312f",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      stone: colors.warmGray,
      sky: colors.lightBlue,
      neutral: colors.trueGray,
      gray: colors.coolGray,
      slate: colors.blueGray,
      red: colors.red,
    },
  },
  plugins: [],
};
