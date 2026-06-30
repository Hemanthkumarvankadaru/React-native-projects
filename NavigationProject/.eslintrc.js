module.exports = {
  root: true,
  extends: ['@react-native', '@react-native-community/eslint-config'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  env: {
    react: true,
    typescript: true,
    'react-native/react-native': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
