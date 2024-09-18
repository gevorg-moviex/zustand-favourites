/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Add custom grid column configurations
        'custom': 'repeat(4, auto)',
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      boxShadow: {
        'customShadow': '0 3px 8px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  plugins: [],
}