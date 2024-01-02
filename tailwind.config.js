/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      // 可以改自己想要的版面大小
      sm: "500px",
      tablet: "920px",
    },
    colors: {
      "main-deep": "#809865",
      ...colors,
    },
    plugins: [],
  },
};
