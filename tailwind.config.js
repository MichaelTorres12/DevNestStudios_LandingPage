/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'tiny-lineHeight': '1.7',
        'extra-loose': '1',
        'very-tiny-interline': '1.3',
      },
      screens: {
        'tablet': '481px',
        'tablet-max': {'max': '970px'},
      },
    },
  },
  plugins: [],
}