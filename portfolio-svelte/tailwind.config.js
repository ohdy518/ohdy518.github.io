/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Noto Serif', 'sans-serif'],
      },
      spacing: {
        "c-small": "20px",
        "c-medium": "40px",
        "c-semilarge": "60px",
        "c-large": "80px",
      }
    },
  },
  plugins: [],
}

