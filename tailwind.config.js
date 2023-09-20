/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        bg: '#F9F9F9',
        bgForm: '#F7F7FB',
        second: '#8A8A89',
        input: 'rgba(18, 20, 23, 0.5)',
        main: '#121417',
        button: '#3470FF',
        btnHover: '#0B44CD',
      },
      backgroundImage: {
        'home-pattern': "url('/assets/main_bg.jpg')",
      },
      // logo: {'logo:'}
    },
  },
  plugins: [],
};
