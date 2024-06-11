/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#062f4f",
        "primary-light": "#15547f",
        "secondary": "#b82601",
        "secondary-light": "#ec4214",
      },
      spacing: {
        "72": "18rem", // 288px @ 16px base font size
      }
    },
  },
  plugins: [],
}