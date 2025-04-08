/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#F5F5F5",
        orange: {
          600: "#E86A2B",
        },
        lime: {
          600: "#B8E63B",
          500: "#A4D500", 
        },
        dark: "#333333",
        gray: {
          200: "#D1D1D1",
          700: "#707070",
        },
      },
    },
  },
};

