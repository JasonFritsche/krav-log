module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      '3xl': '-2px 4px 28px 4px rgba(0, 0, 0, 0.18)'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
