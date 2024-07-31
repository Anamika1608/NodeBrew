
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FAF6F3',
          100: '#F1E8E4',
          200: '#E2D1C9',
          300: '#D3BAAE',
          400: '#C4A393',
          500: '#B58C78',
          600: '#957862',
          700: '#75634E',
          800: '#564A3A',
          900: '#372F26',
      
        },
      },
    },
  },
  plugins: [addVariablesForColors,],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}