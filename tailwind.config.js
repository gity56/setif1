/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      // Add these patterns to ensure all files are included
      "./public/**/*.html",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    // Make sure Tailwind generates all classes
    safelist: [
      // You can add specific classes here that you want to ensure are generated
    ],
    // Ensure JIT mode is enabled (default in Tailwind v3)
    mode: 'jit',
  }