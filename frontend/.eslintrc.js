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
    rules: {},
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