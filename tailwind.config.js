/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./content/**/*.md",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
    },



  },
  plugins: [
    require('@tailwindcss/forms'),
    require("@tailwindcss/typography")
  ],
  css: [
    '@/assets/css/main.css'
  ]
}

