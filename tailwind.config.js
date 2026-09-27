/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#10a37f',
          light: '#e6f7f3',
          dark: '#0d8a6c',
        },
        paper: '#f9f9f6',
        card: '#ffffff',
        ink: '#111110',
        muted: '#71716a',
        border: '#e4e4e0',
      },
    },
  },
  plugins: [],
};
