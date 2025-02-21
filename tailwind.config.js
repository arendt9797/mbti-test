/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        title: '1.5rem',
        subTitle: '1.125rem',
      },
      colors: {
        primary: '#222f44',
        secondary: '#F59E0B',
        neutral: '#E5E7EB',
        primaryHover: '#fcc771',
      },
    },
  },
  plugins: [],
};
