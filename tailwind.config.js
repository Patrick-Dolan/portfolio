/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "audiophile-card": "url('/assets/projects/audiophile-ecommerce/audiophile-card.jpg')",
        "designo-card": "url('/assets/projects/designo-company/designo-pattern.svg')",
        "space-tourism-card": "url('/assets/projects/space-tourism/space-tourism-card.jpg')",
      },
      colors: {
        "primary": "#062f4f",
        "primary-light": "#15547f",
        "secondary": "#b82601",
        "secondary-light": "#ec4214",
      },
      spacing: {
        "72": "18rem", // 288px @ 16px base font size
        "87.5": "21.875rem", // 350px @ 16px base font size
        "125": "31.25rem", // 500px @ 16px base font size
        "172": "43rem", // 688px @ 16px base font size
      }
    },
  },
  plugins: [],
}