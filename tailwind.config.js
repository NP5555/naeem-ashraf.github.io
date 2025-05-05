/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files
  ],
  theme: {
    extend: {
      colors: {
        'blockchain-primary': '#1a2b4b',
        'blockchain-secondary': '#152238',
        'blockchain-accent': '#f7b731',
        'blockchain-text': '#ffffff',
        'ethereum': '#627EEA',
        'bitcoin': '#F7931A',
        'solana': '#00FFA3',
      },
      fontFamily: {
        'code': ['Roboto Mono', 'monospace'],
        'sans': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient-text': 'gradientText 3s ease infinite',
        'pulse-slow': 'pulse 4s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientText: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'blockchain': '0 10px 25px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
