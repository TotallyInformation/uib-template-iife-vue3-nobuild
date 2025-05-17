// eslint.config.js
import js from '@eslint/js';

export default [
    // Base configurations
    js.configs.recommended,
    
    // Global ignores for files in the workspace
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            '*.min.js',
        ],
    },
    
    // Common settings for all files
    {
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
    },
    
    // JavaScript files in src directory
    {
        files: ['src/**/*.js'],
        languageOptions: {
            ecmaVersion: 2019,
            sourceType: 'module',
            globals: {
                // Vue global
                'Vue': 'readonly',
                // uibuilder library global
                'uibuilder': 'readonly',
                // Browser globals
                'console': 'readonly',
                'document': 'readonly',
                'window': 'readonly',
            },
        },
        rules: {
            // Style preferences
            'semi': ['error', 'never'],
            'quotes': ['error', 'single'],
            'no-unused-vars': 'warn',
            
            // Best practices
            'eqeqeq': 'error',
            'no-var': 'error',
            'prefer-const': 'warn',
        },
    },
];
