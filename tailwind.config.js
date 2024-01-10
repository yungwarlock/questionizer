/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#d3552c",
        secondary: "#bf6242",
        secondaryLight: "#cb917d",
      },
    },
    plugins: [],
  }
}
