/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        tavern: {
          950: '#0a0a0c',
          900: '#111114',
          850: '#16161b',
          800: '#1c1c24',
          750: '#23232e',
          700: '#2b2b38',
          border: '#363647',
          gold: '#d4af37',
          amber: '#f59e0b',
        }
      },
      backgroundImage: {
        'tavern-vignette': 'radial-gradient(ellipse at top, rgba(245, 158, 11, 0.08) 0%, rgba(10, 10, 12, 0.95) 75%)',
        'parchment-glow': 'radial-gradient(circle, rgba(212, 175, 55, 0.07) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
