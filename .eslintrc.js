module.exports = {
  env: {
    es6: true,
    browser: true,
    node:  true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: 'airbnb',
  rules: {
    // Personal Preferences below ... proffessionally may change 
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'func-names': 0,
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'symbol-description': 0,
    'brace-style': 0,
    'space-in-parens': 0,
    'template-curly-spacing': 0,
    'object-curly-newline': 0,
    'no-trailing-spaces': 0,
    'no-unused-expressions': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-empty': 0,
    'no-empty-function': 0,
    'no-useless-return': 0,
    'no-unused-vars': 0,
    'prefer-const': 0,
    'global-require': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-curly-spacing': 0,
    'react/no-unused-state': 0,
    'max-len': 0,
    'jsx-a11y/label-has-for': 0, // Depreciated
    // Never use these last 3 in a real application... I mean never!
    'no-alert': 0,
    'no-console': 0,
    'no-debugger': 0,
  },
};
