module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        arrowParens: 'avoid',
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        vueIndentScriptAndStyle: false,
        printWidth: 120,
        bracketSpacing: true,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
