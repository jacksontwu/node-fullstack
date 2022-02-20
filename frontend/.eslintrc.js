module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'plugin:vue/essential',
        '@vue/prettier',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier/@typescript-eslint'
    ],
    rules: {
        'vue/multi-word-component-names': 0,
        'vue/no-unused-components': 0,
        '@typescript-eslint/no-explicit-any': 'off',
    },
    overrides: [{
        files: ['*.ts'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        extends: [
            'plugin:@typescript-eslint/recommended',
            'plugin:prettier/recommended',
        ],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    }],
};