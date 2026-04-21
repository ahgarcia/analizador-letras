/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne:     ['Syne', 'sans-serif'],
        dm:       ['DM Sans', 'sans-serif'],
        righteous: ['Righteous', 'cursive'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-mid':  'floatMid  6s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%':      { transform: 'translateY(-22px) scale(1.04)' },
        },
        floatMid: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%':      { transform: 'translateY(-14px) scale(1.06)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-9px)' },
        },
      },
    },
  },
  plugins: [],
}
