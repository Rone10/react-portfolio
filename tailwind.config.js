module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-landing': "url('/src/images/hero-image.jpg')",
      }),
      spacing: {
        '30rem': '30rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
