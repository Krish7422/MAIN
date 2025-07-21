/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Custom brand colors
        'brand': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'accent': {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        'success': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#10b981',
          600: '#059669',
        },
        'warning': {
          50: '#fffbeb',
          500: '#f59e0b',
        },
        'danger': {
          50: '#fef2f2',
          500: '#ef4444',
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(217, 70, 239, 0.3)',
        'glow-blue': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
        'xl-colored': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(217, 70, 239, 0.1) 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(217, 70, 239, 0.4)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(217, 70, 239, 0.6)',
            transform: 'scale(1.05)'
          },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
      }
    }
  },
  daisyui: {
    themes: [
      {
        "openalgo-dark": {
          "primary": "#0ea5e9",
          "primary-focus": "#0284c7", 
          "primary-content": "#ffffff",
          
          "secondary": "#d946ef",
          "secondary-focus": "#c026d3",
          "secondary-content": "#ffffff",
          
          "accent": "#10b981",
          "accent-focus": "#059669", 
          "accent-content": "#ffffff",
          
          "neutral": "#1f2937",
          "neutral-focus": "#111827",
          "neutral-content": "#f9fafb",
          
          "base-100": "#0f172a",
          "base-200": "#1e293b", 
          "base-300": "#334155",
          "base-content": "#f1f5f9",
          
          "info": "#3b82f6",
          "success": "#10b981",
          "warning": "#f59e0b", 
          "error": "#ef4444",
          
          "--rounded-box": "1rem",
          "--rounded-btn": "0.75rem", 
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "0.95",
          "--border-btn": "2px",
          "--tab-border": "2px",
          "--tab-radius": "0.5rem",
        },
      },
      "light", 
      "dark"
    ],
    darkTheme: "openalgo-dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
  },
  plugins: [require("daisyui")]
}