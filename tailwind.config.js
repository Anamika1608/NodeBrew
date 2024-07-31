
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
      fontFamily: {
        rocaThin: ['rocaThin', 'sans-serif'],
        tan: ['tan', 'sans-serif'],
     
      },
      colors: {
        'coffee-50': '#F7F3EF',
        'coffee-700': '#4E342E',
        'green-600': '#66BB6A',
        'green-700': '#388E3C',
        'blue-600': '#64B5F6',
        'blue-100': '#E3F2FD',
        'blue-50': '#F0F4F8',
        'coffee-light': '#d9c1a3',
        'coffee-dark': '#4b2e2e',
        'coffee-darker': '#2f1d1d',
        'blue-200': '#cfe2f3',
        'blue-800': '#243c5a',
        'blue-900': '#1b2e4b',
        'coffee-900': '#2C2A29',
        'coffee-800': '#3C3A38',
        'coffee-700': '#524E4C',
        'coffee-600': '#6D6865',
        'coffee-300': '#B0A596',
        'green-400': '#81C784',
        'green-500': '#66BB6A',
        'blue-400': '#76B3B5',
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