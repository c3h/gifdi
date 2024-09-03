module.exports = {
  extends: ['./node_modules/gts/', 'next/core-web-vitals'],
  rules: {
    // @typescript-eslint
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': ['error', { 'fixStyle': 'inline-type-imports' }],
    // import
    'import/no-duplicates': 'off',
    // prettier/prettier
    'prettier/prettier': ['error', { 'endOfLine': 'auto' }]
  },
  settings: {
    node: {
      allowModules: ['tailwindcss']
    }
  }
}
