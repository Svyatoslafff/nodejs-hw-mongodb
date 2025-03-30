import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    pluginJs.configs.recommended,
    {
        files: ['src/**/*.ts'],
        languageOptions: { globals: globals.node },
        rules: {
            semi: 'error',
            'no-unused-vars': ['error', { args: 'none' }],
            'no-undef': 'error',
        },
    },
];
