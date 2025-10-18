/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px", // iPhone SE, petits écrans
        sm: "640px", // Tablettes portrait
        md: "768px", // Tablettes paysage
        lg: "1024px", // Laptops
        xl: "1280px", // Desktops
        "2xl": "1536px", // Large desktops
        mobile: "390px", // Samsung S24 et similaires
        "mobile-lg": "414px", // iPhone Plus, grands mobiles
        tablet: "768px",
        desktop: "1024px",
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        heading: ["Hurricane", "cursive"],
        windsong: ["Hurricane", "cursive"],
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
