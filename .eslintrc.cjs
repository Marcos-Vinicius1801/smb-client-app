/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    
  ],
  rules:{
    "vue/require-v-for-key": 0,
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}