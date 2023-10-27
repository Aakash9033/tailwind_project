/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white':'#FFFFFF',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#FAFF14',
      'gray-dark': '#273444',
      'gray': '#8692A6',
      'gray-light': '#58595B',
      'primary':'#4A2CF5'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'sidebar_img': "url('/src/assets/Rectangle.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
  },
  plugins: [],
}
}
