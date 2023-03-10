module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-console': [0], // turned off for now while we are console.logging everywhere.
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: true,
    //   },
    // ],
    // react eslint rules off
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
