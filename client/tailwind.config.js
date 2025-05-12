/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        ramenGreen: "#B7C8B5",
        ramenTeal: "#4B6460",
        ramenPeach: "#E6B89C",
        ramenOrange: "#E9A178",
        ramenPink: "#F6D6D6",
        ramenDark: "#2C3A3A",
        youtubeRed: "#FF0000",
        instaPink: "#e1306c",
        beliBlue: "#305462",
        spotifyGreen: "#1DB954"
      },
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}
