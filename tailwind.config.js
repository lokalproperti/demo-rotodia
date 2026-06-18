/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'midnight': {
          DEFAULT: '#0F1115',
          light: '#16191F',
        },
        'luxury': {
          text: '#E8E6E1',
          muted: '#9CA3AF',
          accent: '#C6A87C',
          'accent-hover': '#D4B88F',
          border: 'rgba(198, 168, 124, 0.2)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}