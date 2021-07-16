'use strict';

const {RULES_LEVELS: {OFF, ERROR}} = require('./constants');

const MAX_CLASSES_IN_FILE = 2;
const INDENT_SPACES = 4;
const MAX_CODE_DEPTH = 4;
const MAX_LINE_LENGTH = 150;
const MAX_LINES_PER_FUNCTION = 120;
const MAX_NESTED_CALLBACKS = 3;
const MAX_FUNCTION_PARAMS = 4;
const MAX_COMPLEXITY = 10;

module.exports = {
    globals: {
        Promise: true,
        Symbol: true,
        Map: true,
        Set: true,
        JSON: true
    },
    parserOptions: {
        ecmaVersion: 10
    },
    rules: {
        'for-direction': ERROR,
        'getter-return': ERROR,
        'no-async-promise-executor': ERROR,
        'no-await-in-loop': OFF,
        'no-compare-neg-zero': ERROR,
        'no-cond-assign': ERROR,
        'no-console': ERROR,
        'no-constant-condition': ERROR,
        'no-control-regex': ERROR,
        'no-debugger': ERROR,
        'no-dupe-args': ERROR,
        'no-dupe-keys': ERROR,
        'no-duplicate-case': ERROR,
        'no-empty': ERROR,
        'no-empty-character-class': ERROR,
        'no-ex-assign': ERROR,
        'no-extra-boolean-cast': ERROR,
        'no-extra-parens': ERROR,
        'no-extra-semi': ERROR,
        'no-func-assign': ERROR,
        'no-inner-declarations': ERROR,
        'no-invalid-regexp': ERROR,
        'no-irregular-whitespace': ERROR,
        'no-misleading-character-class': ERROR,
        'no-obj-calls': ERROR,
        'no-prototype-builtins': ERROR,
        'no-regex-spaces': ERROR,
        'no-sparse-arrays': ERROR,
        'no-template-curly-in-string': ERROR,
        'no-unexpected-multiline': ERROR,
        'no-unreachable': ERROR,
        'no-unsafe-finally': ERROR,
        'no-unsafe-negation': ERROR,
        'require-atomic-updates': ERROR,
        'use-isnan': ERROR,
        'valid-typeof': ERROR,
        'accessor-pairs': OFF,
        'array-callback-return': ERROR,
        'block-scoped-var': ERROR,
        'class-methods-use-this': ERROR,
        complexity: [
            ERROR,
            {
                max: MAX_COMPLEXITY
            }
        ],
        'consistent-return': ERROR,
        curly: ERROR,
        'default-case': ERROR,
        'dot-location': [
            ERROR,
            'property'
        ],
        'dot-notation': ERROR,
        eqeqeq: [
            ERROR,
            'always'
        ],
        'guard-for-in': ERROR,
        'max-classes-per-file': [
            ERROR,
            MAX_CLASSES_IN_FILE
        ],
        'no-alert': ERROR,
        'no-caller': ERROR,
        'no-case-declarations': ERROR,
        'no-div-regex': ERROR,
        'no-else-return': ERROR,
        'no-empty-function': ERROR,
        'no-empty-pattern': ERROR,
        'no-eq-null': ERROR,
        'no-eval': ERROR,
        'no-extend-native': ERROR,
        'no-extra-bind': ERROR,
        'no-extra-label': ERROR,
        'no-fallthrough': ERROR,
        'no-floating-decimal': ERROR,
        'no-global-assign': ERROR,
        'no-implicit-coercion': ERROR,
        'no-implicit-globals': OFF,
        'no-implied-eval': ERROR,
        'no-invalid-this': ERROR,
        'no-iterator': ERROR,
        'no-labels': ERROR,
        'no-lone-blocks': ERROR,
        'no-loop-func': ERROR,
        'no-magic-numbers': [
            ERROR,
            {
                ignoreArrayIndexes: true,
                ignore: [0, 1, -1]
            }
        ],
        'no-multi-spaces': ERROR,
        'no-multi-str': ERROR,
        'no-new': ERROR,
        'no-new-func': ERROR,
        'no-new-wrappers': ERROR,
        'no-octal': ERROR,
        'no-octal-escape': ERROR,
        'no-param-reassign': ERROR,
        'no-proto': ERROR,
        'no-redeclare': ERROR,
        'no-restricted-properties': OFF,
        'no-return-assign': ERROR,
        'no-return-await': ERROR,
        'no-script-url': ERROR,
        'no-self-assign': ERROR,
        'no-self-compare': ERROR,
        'no-sequences': ERROR,
        'no-throw-literal': ERROR,
        'no-unmodified-loop-condition': ERROR,
        'no-unused-expressions': ERROR,
        'no-unused-labels': ERROR,
        'no-useless-call': ERROR,
        'no-useless-catch': ERROR,
        'no-useless-concat': ERROR,
        'no-useless-escape': ERROR,
        'no-useless-return': ERROR,
        'no-void': ERROR,
        'no-warning-comments': ERROR,
        'no-with': ERROR,
        'prefer-named-capture-group': ERROR,
        'prefer-promise-reject-errors': OFF,
        radix: ERROR,
        'require-await': OFF,
        'require-unicode-regexp': ERROR,
        'vars-on-top': ERROR,
        'wrap-iife': ERROR,
        yoda: ERROR,
        strict: [
            ERROR,
            'global'
        ],
        'init-declarations': OFF,
        'no-delete-var': ERROR,
        'no-label-var': ERROR,
        'no-restricted-globals': OFF,
        'no-shadow': ERROR,
        'no-shadow-restricted-names': ERROR,
        'no-undef': ERROR,
        'no-undef-init': ERROR,
        'no-undefined': OFF,
        'no-unused-vars': ERROR,
        'no-use-before-define': ERROR,
        'callback-return': ERROR,
        'global-require': OFF,
        'handle-callback-err': ERROR,
        'no-buffer-constructor': ERROR,
        'no-mixed-requires': ERROR,
        'no-new-require': ERROR,
        'no-path-concat': ERROR,
        'no-process-env': ERROR,
        'no-process-exit': OFF,
        'no-restricted-modules': OFF,
        'no-sync': OFF,
        'array-bracket-newline': OFF,
        'array-bracket-spacing': OFF,
        'array-element-newline': OFF,
        'block-spacing': ERROR,
        'brace-style': OFF,
        camelcase: OFF,
        'capitalized-comments': ERROR,
        'comma-dangle': [
            ERROR,
            'never'
        ],
        'comma-spacing': [
            ERROR,
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [
            ERROR,
            'last'
        ],
        'computed-property-spacing': [
            ERROR,
            'never'
        ],
        'consistent-this': [
            ERROR,
            'self'
        ],
        'eol-last': ERROR,
        'func-call-spacing': ERROR,
        'func-name-matching': OFF,
        'func-names': OFF,
        'func-style': [
            ERROR,
            'expression'
        ],
        'function-call-argument-newline': OFF,
        'function-paren-newline': OFF,
        'id-blacklist': OFF,
        'id-length': OFF,
        'id-match': OFF,
        'implicit-arrow-linebreak': OFF,
        indent: [
            ERROR,
            INDENT_SPACES,
            {
                SwitchCase: 1
            }
        ],
        'key-spacing': ERROR,
        'keyword-spacing': ERROR,
        'line-comment-position': ERROR,
        'linebreak-style': ERROR,
        'lines-around-comment': [
            ERROR,
            {
                beforeBlockComment: true
            }
        ],
        'lines-between-class-members': ERROR,
        'max-depth': [
            ERROR,
            MAX_CODE_DEPTH
        ],
        'max-len': [
            ERROR,
            MAX_LINE_LENGTH
        ],
        'max-lines': OFF,
        'max-lines-per-function': [
            ERROR,
            MAX_LINES_PER_FUNCTION
        ],
        'max-nested-callbacks': [
            ERROR,
            MAX_NESTED_CALLBACKS
        ],
        'max-params': [
            ERROR,
            MAX_FUNCTION_PARAMS
        ],
        'max-statements': OFF,
        'max-statements-per-line': OFF,
        'multiline-comment-style': [
            ERROR,
            'separate-lines'
        ],
        'multiline-ternary': OFF,
        'new-cap': ERROR,
        'new-parens': ERROR,
        'newline-per-chained-call': [
            ERROR,
            {
                ignoreChainWithDepth: 2
            }
        ],
        'no-array-constructor': ERROR,
        'no-bitwise': ERROR,
        'no-continue': ERROR,
        'no-inline-comments': ERROR,
        'no-lonely-if': ERROR,
        'no-mixed-operators': ERROR,
        'no-mixed-spaces-and-tabs': ERROR,
        'no-multi-assign': ERROR,
        'no-multiple-empty-lines': ERROR,
        'no-negated-condition': ERROR,
        'no-nested-ternary': ERROR,
        'no-new-object': ERROR,
        'no-plusplus': OFF,
        'no-restricted-syntax': ERROR,
        'no-tabs': ERROR,
        'no-ternary': OFF,
        'no-trailing-spaces': ERROR,
        'no-underscore-dangle': OFF,
        'no-unneeded-ternary': ERROR,
        'no-whitespace-before-property': ERROR,
        'nonblock-statement-body-position': OFF,
        'object-curly-newline': [
            ERROR,
            {
                ObjectExpression: {
                    consistent: true
                },
                ObjectPattern: {
                    consistent: true
                }
            }
        ],
        'object-curly-spacing': [
            ERROR,
            'never'
        ],
        'object-property-newline': OFF,
        'one-var': [
            ERROR,
            {
                initialized: 'never',
                uninitialized: 'always'
            }
        ],
        'one-var-declaration-per-line': OFF,
        'operator-assignment': OFF,
        'operator-linebreak': [
            ERROR,
            'after'
        ],
        'padded-blocks': [
            ERROR,
            'never'
        ],
        'padding-line-between-statements': [
            ERROR,
            {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            }
        ],
        'prefer-object-spread': ERROR,
        'quote-props': [
            ERROR,
            'as-needed'
        ],
        quotes: [
            ERROR,
            'single'
        ],
        semi: ERROR,
        'semi-spacing': [
            'error',
            {
                before: false,
                after: false
            }
        ],
        'semi-style': [
            ERROR,
            'last'
        ],
        'sort-keys': OFF,
        'sort-vars': OFF,
        'space-before-blocks': [
            ERROR,
            'always'
        ],
        'space-before-function-paren': [
            ERROR,
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': [
            ERROR,
            'never'
        ],
        'space-infix-ops': ERROR,
        'space-unary-ops': OFF,
        'spaced-comment': ERROR,
        'switch-colon-spacing': ERROR,
        'template-tag-spacing': ERROR,
        'unicode-bom': ERROR,
        'wrap-regex': OFF,
        'arrow-body-style': [
            ERROR,
            'as-needed'
        ],
        'arrow-parens': [
            ERROR,
            'as-needed'
        ],
        'arrow-spacing': [
            ERROR,
            {
                before: true,
                after: true
            }
        ],
        'constructor-super': ERROR,
        'generator-star-spacing': [
            ERROR,
            'after'
        ],
        'no-class-assign': ERROR,
        'no-confusing-arrow': ERROR,
        'no-const-assign': ERROR,
        'no-dupe-class-members': ERROR,
        'no-new-symbol': ERROR,
        'no-this-before-super': ERROR,
        'no-useless-computed-key': ERROR,
        'no-useless-constructor': ERROR,
        'no-var': ERROR,
        'object-shorthand': ERROR,
        'prefer-arrow-callback': ERROR,
        'prefer-const': ERROR,
        'prefer-destructuring': OFF,
        'prefer-numeric-literals': ERROR,
        'prefer-rest-params': ERROR,
        'prefer-spread': ERROR,
        'prefer-template': ERROR,
        'require-yield': ERROR,
        'rest-spread-spacing': OFF,
        'symbol-description': ERROR,
        'template-curly-spacing': ERROR,
        'yield-star-spacing': OFF,
        'no-import-assign': ERROR,
        'prefer-regex-literals': [
            ERROR,
            {
                disallowRedundantWrapping: true
            }
        ],
        'default-param-last': ERROR,
        'prefer-exponentiation-operator': OFF,
        'no-setter-return': ERROR,
        'no-dupe-else-if': ERROR,
        'no-constructor-return': ERROR,
        'grouped-accessor-pairs': ERROR,
        'no-restricted-exports': [
            ERROR,
            {
                restrictedNamedExports: []
            }
        ],
        'no-useless-backreference': ERROR,
        'default-case-last': ERROR,
        'no-loss-of-precision': ERROR,
        'no-unreachable-loop': ERROR,
        'no-promise-executor-return': ERROR
    },
    overrides: [{
        files: ['*.tests.js', '*.test.js', '*.spec.js'],
        rules: {
            'no-magic-numbers': 'off',
            'max-nested-callbacks': 'off',
            'max-lines-per-function': 'off'
        }
    }],
    env: {
        node: true,
        jest: true
    }
};
