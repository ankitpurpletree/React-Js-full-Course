/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode using the 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JavaScript and TypeScript files
  ],
  theme: {
    extend: {}, // You can add your custom theme configurations here
  },
  plugins: [],
};
