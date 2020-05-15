module.exports = {
  root: true,
  parserOptions: {},
  env: {
    browser: true,
  },
  extends: [
    'standard'
  ],

  plugins: [
  ],
  rules: {
    'generator-star-spacing': 'off',
    'space-before-function-paren': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
