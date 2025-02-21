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
        primary: '#F59E0B',
        secondary: '#222f44',
        neutral: '#E5E7EB',
        primaryHover: '#f7b44a',
      },
    },
  },
  plugins: [],
};
