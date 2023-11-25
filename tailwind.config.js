/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      martel: "'Martel', serif"// Replace 'Roboto' with your desired Google Font
    },
  },
  plugins: [require("daisyui")],
}

