/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        
        "main-background-color" : "var(--main-background-color)",
        "card-background-color" : "var(--card-background-color)",
        "accent-color": "var(--accent-color)",

        "main-heading-color" : "var(--main-heading-color)",
        "main-paragraph-color" : "var(--main-paragraph-color)",
        "stat-heading-color" : "var(--stat-heading-color)"

      },
      fontFamily: {
        "Inter": ["Inter", "sans-serif"]
      },
      backgroundImage: {
        "image-header" : "url('images/image-header-desktop.jpg')"
      },
      height: {
        'custom': '1000px',
        'small': '1200px'
      },
      brightness: {
        40: '.40',
      }
    },
  },
  plugins: [],
}
