/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customgreen: '#b6d6bf',
        none: 'none',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      }
    }
  },
  plugins: [],
}