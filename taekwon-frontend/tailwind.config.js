/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'publicsans': ['"Public Sans"', 'sans-serif'],
        'postnobills': ['"Post No Bills Colombo"', 'serif'],
      },
    },
  },
  plugins: [],
}

