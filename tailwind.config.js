/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        'suse': ['SUSE', 'sans-serif']
      },
      keyframes: {
        'walking': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'goyang': {
          '0%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '100%': { transform: 'rotate(-15deg)' },
        }
      },
      animation: {
        'walking': 'walking 10s linear infinite',
        'goyang': 'goyang 2s linear infinite'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

