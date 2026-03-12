/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'background-light': '#f8fafc',
        'background-dark': '#0f172a',
      },
      fontFamily: {
        'display': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
