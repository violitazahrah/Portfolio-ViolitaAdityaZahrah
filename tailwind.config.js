/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#ca8a04",
        dark: "#312e81",
        secondary: "#78716c",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
