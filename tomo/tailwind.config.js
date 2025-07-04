const defaultTheme = require('tailwindcss/defaultTheme');
const plugins = [
  require('@tailwindcss/typography'),
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/container-queries'),
];
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        core: { red: '#D7262E' },
        accent: { basil: '#316B3C' },
        neutral: {
          cream: '#FFF8EF',
          espresso: '#1B0B0B',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        domine: ['Domine', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins,
};
