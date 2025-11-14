/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1A2A6C',
          secondary: '#FDC830',
          accent: '#00C9FF',
          dark: '#0D152F',
        },
      },

      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },

      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #1A2A6C 0%, #00C9FF 100%)',
        'service-tile':
          'linear-gradient(145deg, rgba(10,20,60,0.9), rgba(0,0,0,0.65))',
      },

      animation: {
        fade: 'fadeIn 0.8s ease-in-out',
        float: 'float 6s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],

  darkMode: 'class',
};
