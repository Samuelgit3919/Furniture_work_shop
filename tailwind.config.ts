import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          dark: '#9A7530',
          subtle: 'rgba(201,168,76,0.08)',
        },
        wood: {
          DEFAULT: '#8B5E3C',
          light: '#C4915A',
          dark: '#5C3A1E',
        },
        cream: '#F2EDE3',
        'warm-white': '#FAF8F5',
        charcoal: '#1A1A1A',
        'text-muted': '#6B6460',
        'text-dark': '#2A2218',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'scroll-line': 'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scaleY(1)' },
          '50%': { opacity: '1', transform: 'scaleY(1.1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
