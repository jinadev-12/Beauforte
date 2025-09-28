/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // fixed double slash and included all subfolders
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lato: ["Lato", "sans-serif"],
        bodoni: ["Bodoni Moda", "serif"],
      },
    },
  },
  plugins: [],
};
