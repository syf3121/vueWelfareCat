module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2],
    'semi':['error','always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  },

}