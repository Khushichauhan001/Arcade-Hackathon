/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'system-ui'],
        'poppins': ['Poppins', 'system-ui'],
      },
      colors: {
        'neon-pink': '#ff00ff',
        'neon-blue': '#00ffff',
        'neon-green': '#39ff14',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};