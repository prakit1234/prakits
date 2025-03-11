/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'phone-bg': '#1a1a1a',
        'app-bg': '#2a2a2a',
      }
    },
  },
  plugins: [],
} 