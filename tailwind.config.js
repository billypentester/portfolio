/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          'primary': colors.gray[50],
          'secondary': colors.emerald[500],
          'accent': colors.emerald[400],
          'neutral': colors.gray[900],
          'base': colors.gray[200]
        },
        dark : {
          'primary': colors.gray[900],
          'secondary': colors.emerald[500],
          'accent': colors.emerald[400],
          'neutral': colors.gray[100],
          'base': colors.gray[800]
        }
      }
    }
  },
  plugins: [],
};
