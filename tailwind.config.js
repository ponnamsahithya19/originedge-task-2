/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#00A78E',
          'teal-dark': '#00907a',
          'teal-light': '#EAF8F6',
          navy: '#0F172A', // Slate 900
          blue: '#1E293B', // Slate 800
          grey: '#F8FAFC', // Slate 50
          orange: '#FF7A00', // Highlight color for active states
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 8px -1px rgba(15, 23, 42, 0.02)',
        'premium-hover': '0 10px 25px -3px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
}
