// tailwind.config.js

import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your custom font family
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      
      // Your custom keyframes
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(1px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      
      // Your custom animations
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up-fade': 'slide-up-fade 0.9s ease-out forwards',
      },
    },
  },
  plugins: [],
}