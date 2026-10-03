/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          DEFAULT: '#198754',
          accent: '#2ebd7f',
          glow: 'rgba(46, 189, 127, 0.2)'
        },
        petrol: {
          50: '#f0f7f7',
          100: '#d9ebec',
          200: '#b3d8da',
          300: '#8dc4c7',
          700: '#103940',
          800: '#0b2b30',
          900: '#071f23',
          950: '#041316',
          DEFAULT: '#082226'
        },
        surface: {
          light: '#f7faf8',
          card: '#ffffff',
          muted: '#eef3f0',
          border: '#dbe4e0',
          darkBorder: '#12383f'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.12em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'flow-line': 'flowLine 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        flowLine: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}
