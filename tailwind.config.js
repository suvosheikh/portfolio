// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        secondary: '#161616',
        accent: '#00bcd4', // Turquoise/Cyan color
        textPrimary: '#ffffff',
        textSecondary: '#b3b3b3',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'paragraph': ['Inter', 'sans-serif'],
      },
      
      // Custom Keyframes and Animations
      keyframes: {
        'slide-progress': {
          // Progress bar-er jonne: eta bar-ke left theke right-e niye jay
          '0%': { transform: 'translateX(-100%)' }, 
          '100%': { transform: 'translateX(300%)' }, 
        },
        'fade-in': {
            // Quote-er jonne: eta halka bhabe show kore
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
        }
      },
      animation: {
        // Duration 2s theke 3s kora holo
        'slide-progress': 'slide-progress 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}
