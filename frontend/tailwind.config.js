const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "310px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
