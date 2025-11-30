import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-helvetica)', 'Arial', 'sans-serif'],
        display: ['var(--font-din)', 'Impact', 'sans-serif'], // Для заголовков
      },
      colors: {
        brand: {
          black: '#1a1a1a', // Темный фон секции Values
          sand: '#C2B280', // Примерный цвет акцентов, если понадобятся
          white: '#ffffff',
          gray: '#888888', // Цвет текста параграфов
        }
      },
      letterSpacing: {
        widest: '.15em', // Для верхнего регистра меню и заголовков
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;