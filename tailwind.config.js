/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avengers: ['var(--font-avengers)', 'sans-serif'],
        metal: ['var(--font-fira-sans)', 'sans-serif'],
        tech: ['var(--font-michroma)', 'sans-serif'],
        heading: ['var(--font-orbitron)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        doom: {
          black: '#0a0a0c',
          dark: '#111317',
          green: '#39ff14',
          greenDark: '#0b5900',
          silver: '#a0aab2',
          gold: '#fcd34d'
        }
      },
      backgroundImage: {
        'doomsday-gradient': 'radial-gradient(circle at top, #0b5900 0%, #0a0a0c 60%)',
        'card-gradient': 'linear-gradient(145deg, #111317 0%, #0a0a0c 100%)',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(57, 255, 20, 0.5)',
        'neon-strong': '0 0 30px rgba(57, 255, 20, 0.8)',
      }
    },
  },
  plugins: [],
};
