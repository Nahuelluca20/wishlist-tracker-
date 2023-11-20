/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nextGray: {
          100: "#4D4D53",
          200: "#52525B",
          300: "#27272A",
        },
        vercel: {
          pink: "#FF0080",
        },
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
};
