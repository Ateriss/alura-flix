/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "blue-title": "#6BD1FF",
      "gray-light": "#F5F5F5",
      "black.dark": "rgba(0, 0, 0, 0.9)",
      "shadow-black": "rgba(0, 0, 0, 0.25)",
      "green-title": "#00C86F",
      "orange-title": "#FE8C2A",
      "orange-light-title": "#FFBA05",
      "pink-title":"#DC6EBE",
      "green-light-title":"#9CD33B",
      "purple-title": "#6B5BE2", 
      "primary-blue": "#2A7AE4",
      "grey-m": "#53585D",
      transparent: 'transparent',
    },
  },
  plugins: [],
};
