/** @type {import('tailwindcss').Config} */
import plugin from 'flowbite/plugin'
export default {
  content: [
    "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"),],
}

