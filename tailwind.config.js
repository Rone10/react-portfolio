module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1DA1F2",
        "youtube-red": "#c4302b"
      },
      backgroundImage: theme => ({
        'hero-landing': "url('/src/images/hero-image.jpg')",
      }),
      spacing: {
        '30rem': '30rem'
      },
      animation: {
        'bounce-once': 'bounce 2s linear',
      },
    },

  },
  plugins: [
    require('@tailwindcss/typography'),

  ],

  variants: {
    extend: {},
  },
  plugins: [],
}
