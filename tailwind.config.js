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
        "custom-2-shadow": "0 0 5px 5px #03BFA9",
        "inputsShadow": "#03BFA9 0px 5px 15px;"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(63, 108, 251, 1) 21%, rgba(252, 70, 107, 1) 100%)',
      },
    },
  },
  plugins: [],
}