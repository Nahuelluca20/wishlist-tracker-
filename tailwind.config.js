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
          400: "#71717A",
          500: "#18181B",
        },
        vercel: {
          pink: "#FF0080",
          blue: "#0070F3",
        },
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
};
