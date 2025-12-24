/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}",
    "./public/**/*.html",
  ],

safelist: [
  "fade-in",
  "bg-brand-primary",
  "bg-brand-secondary",
  "bg-brand-accent",
  "text-brand-primary",
  "text-brand-accent",
],


  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1120px",
        xl: "1320px",
      },
    },

    extend: {
      colors: {
        brand: {
          primary: "#1A2A6C",
          secondary: "#FDC830",
          accent: "#00C9FF",
          dark: "#0D152F",
        },
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },

      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #1A2A6C 0%, #00C9FF 100%)",
        "service-tile":
          "linear-gradient(145deg, rgba(10,20,60,0.9), rgba(0,0,0,0.65))",
      },

      animation: {
        fade: "fadeIn 0.8s ease-in-out",
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 2.5s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.85 },
          "50%": { opacity: 1 },
        },
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],

  darkMode: "class",
};

