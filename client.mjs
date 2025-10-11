import globals from 'globals';
import getBaseConfig from './common.mjs';
import {RULES_LEVELS} from './constants.mjs';

const {OFF, WARN} = RULES_LEVELS;

export default [
    ...getBaseConfig({
        MAX_CLASSES_IN_FILE: 2,
        MAX_CODE_DEPTH: 4,
        MAX_LINES_PER_FUNCTION: 300,
        MAX_NESTED_CALLBACKS: 5,
        MAX_FUNCTION_PARAMS: 5,
        MAX_COMPLEXITY: 10,
        globalsConfig: {
            ...globals.browser
        },
        typescriptFiles: ['**/*.ts', '**/*.tsx']
    }),
    {
        rules: {
            'no-alert': WARN,
            'no-inline-comments': OFF,
        }
    },
];
