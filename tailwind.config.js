/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "pulse-ribbon": {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) scale(1.2)" },
        },
      },
      animation: {
        "pulse-ribbon": "pulse-ribbon 3s ease-in-out infinite",
      },
      fontFamily: {
        sans: ['Cinzel', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'gold': '#c89116',
      }
    },
  },
  plugins: [],
};
