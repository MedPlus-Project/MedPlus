/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      blue: "#002333",
      babyBlue: "#E2E9FF",
      teal: "#559E8D",
      mintGreen: "#ACE8B5",
      red: "#EF4444",
      grey: "#B0B0B0",
      lightGrey: "#E5E9EB",
      yellow: "#FB923C",
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      blueDefault: colors.blue,
      redDefault: colors.red,
    },
    extend: {
      backgroundImage: {
        // aboutUs: "url('assets/aboutusbg.jpeg')",
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
    require("@tailwindcss/line-clamp"),
  ],
};
