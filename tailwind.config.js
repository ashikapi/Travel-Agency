/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sutonny: ['SutonnyMJ', 'sans-serif'],
      },
    },
  },
  plugins: [],
}