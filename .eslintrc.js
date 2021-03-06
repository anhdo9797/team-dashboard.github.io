module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
    plugins: [],
    rules: {
        'react/jsx-wrap-multilines': 0,
        'react/prop-types': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-one-expression-per-line': 0,
        eqeqeq: 1,
        radix: ['error', 'as-needed'],
        "no-console": "warn",
        'consistent-return': 0,
        'react/no-unescaped-entities': 1,
        'react/button-has-type': 0,
        'react/state-in-constructor': 0,
        'react/no-array-index-key': 1,
        // 'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': 1,
        'no-confusing-arrow': 0,
        'object-curly-newline': 0,
        'implicit-arrow-linebreak': 0,
        'operator-linebreak': 0,
        'no-param-reassign': 1,
        'no-unused-expressions': 1,
        'no-fallthrough': 0,
        'space-before-function-paren': 0,
        'react/jsx-props-no-spreading': 1,
        'max-len': 0,
        'linebreak-style': 0,
    },
};
