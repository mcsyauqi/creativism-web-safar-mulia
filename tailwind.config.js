/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#047857',
          dark: '#065f46',
          light: '#059669',
        },
        secondary: {
          DEFAULT: '#D4AF37',
          dark: '#B8972E',
        },
        accent: {
          DEFAULT: '#1E3A5F',
          light: '#2C5282',
        },
        background: {
          DEFAULT: '#F8FAF5',
          alt: '#F0F4EB',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
