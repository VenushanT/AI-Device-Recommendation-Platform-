/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#ddd6fe',
          200: '#c4b5fd',
          300: '#a78bfa',
          400: '#8b5cf6',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3c1577',
        },
        secondary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        dark: {
          bg: '#0f0f23',
          surface: '#1a1a2e',
          card: '#16213e',
          text: '#e2e8f0',
          muted: '#64748b',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'gradient-text': 'gradientText 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        gradientText: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          'from': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)' },
          'to': { 
            boxShadow: '0 0 30px rgba(124, 58, 237, 0.8), 0 0 40px rgba(6, 182, 212, 0.4)' 
          },
        },
        glow: {
          'from': { 
            textShadow: '0 0 10px rgba(124, 58, 237, 0.8), 0 0 20px rgba(124, 58, 237, 0.6)' 
          },
          'to': { 
            textShadow: '0 0 20px rgba(124, 58, 237, 1), 0 0 30px rgba(6, 182, 212, 0.8)' 
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 58, 237, 0.4)',
        'glow-lg': '0 0 30px rgba(124, 58, 237, 0.6)',
        'neon': '0 0 10px rgba(124, 58, 237, 0.8), 0 0 20px rgba(124, 58, 237, 0.6), 0 0 30px rgba(124, 58, 237, 0.4)',
      },
    },
  },
  plugins: [],
}