/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    safelist: ["animate-[fade-in-right_1s_ease-in-out]"],
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
