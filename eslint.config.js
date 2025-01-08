import pluginJs from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  /** Files to ignore */
  {
    ignores: [
      '**/dist/**',
      '**/tmp/**',
      '**/coverage/**',
      'eslint.config.js',
      'build.config.ts'
    ]
  },
  /** Files to include */
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  /** Typescript config */
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  /** https://typescript-eslint.io/users/configs/#recommended */
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off'
    }
  },
  /** Vitest Config */
  {
    files: ['tests/**'], // or any other pattern
    ...vitest.configs.recommended
  },
  /** Prettier Config*/
  eslintConfigPrettier
];
