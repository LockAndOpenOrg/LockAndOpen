// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ✅ Custom Font
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },

      // ✅ Custom Keyframes
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(1px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        swirl: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        'swirl-reverse': {
          '0%': { transform: 'translate(0, 0) rotate(360deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        },
      },

      // ✅ Custom Animations
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up-fade': 'slide-up-fade 0.9s ease-out forwards',
        'swirl-slow': 'swirl 60s linear infinite',
        'swirl-slow-reverse': 'swirl-reverse 60s linear infinite',
      },
    },
  },
  plugins: [],
}
