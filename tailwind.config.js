module.exports = {
  purge: {

    enabled: false,
    content: ['*.html'],

  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Quicksand"', 'sans-serif'],
      serif: ['"Noto Serif Display"', 'serif']

    },

    extend: {
      colors: {
        darkTrans: 'rgba(0,0,0,0.3)',
        dark: '#333',
        accent: '#e0bc75',
        light: '#999',
        grayText: '#aaa'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {

    container: false,
  }
}
