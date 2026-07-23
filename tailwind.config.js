/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0F19',
        surfaceDark: '#121A2B',
        paper: '#F3F5F1',
        surfaceLight: '#FFFFFF',
        signal: {
          DEFAULT: '#E3A548',
          soft: '#F0C888',
        },
        trace: {
          DEFAULT: '#3FB8AE',
          soft: '#8FDAD3',
        },
        muted: '#8A93A3',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(227,165,72,0.55)' },
          '50%': { boxShadow: '0 0 0 6px rgba(227,165,72,0)' },
        },
        traceFlow: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        traceFlow: 'traceFlow 1.2s linear infinite',
      },
    },
  },
  plugins: [],
}
