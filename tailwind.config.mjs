/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/pages/**/*.{astro,html,js,jsx,md,mdx}',
    './src/layouts/**/*.{astro,html,js,jsx,md,mdx}',
    './src/components/**/*.{astro,html,js,jsx,md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Nueva paleta de colores azules
        'primary': '#1e73be',       // Azul principal (más oscuro)
        'secondary': '#3498db',     // Azul secundario (medio)
        'accent': '#87cefa',        // Azul claro / acento
        'light': '#e6f7ff',         // Fondo claro azulado
        'dark': '#0d3c61'           // Azul muy oscuro para textos
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
};