export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive']
      },
      boxShadow: {
        glow: '0 0 30px rgba(34, 197, 94, 0.1)'
      }
    }
  },
  plugins: []
};
