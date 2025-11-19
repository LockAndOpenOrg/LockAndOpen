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
        // --- Your Existing Keyframes ---
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(10px)' }, // Adjusted slightly for smoothness
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

        // --- NEW: Required for HomePage Background ---
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, // Creates the bobbing effect
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%', backgroundSize: '200% 200%' },
          '50%': { backgroundPosition: '100% 50%', backgroundSize: '200% 200%' },
          '100%': { backgroundPosition: '0% 50%', backgroundSize: '200% 200%' },
        },
      },

      // ✅ Custom Animations
      animation: {
        // --- Your Existing Animations ---
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up-fade': 'slide-up-fade 0.9s ease-out forwards',
        'swirl-slow': 'swirl 60s linear infinite',
        'swirl-slow-reverse': 'swirl-reverse 60s linear infinite',

        // --- NEW: Required for HomePage Background ---
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
      },
    },
  },
  plugins: [],
}