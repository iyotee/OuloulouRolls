/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        heading: ["Bubblegum Sans", "cursive"],
      },
      colors: {
        primary: {
          coral: "#ff6b6b",
          mint: "#4ecdc4",
          lavender: "#a8e6cf",
          peach: "#ffd93d",
          rose: "#ff8a80",
        },
        secondary: {
          slate: "#2d3748",
          charcoal: "#1a202c",
          cream: "#f7fafc",
        },
        accent: {
          teal: "#38b2ac",
          indigo: "#667eea",
        },
      },
    },
  },
  plugins: [],
};
