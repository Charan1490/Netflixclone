/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#E50914',
          black: '#141414',
          gray: '#2F2F2F',
        },
        streamflix: {
          primary: '#8B5CF6',
          secondary: '#EC4899',
          dark: '#0F172A',
          darker: '#020617',
          accent: '#3B82F6',
        },
      },
    },
  },
  plugins: [],
}
