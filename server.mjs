import globals from 'globals';
import getBaseConfig from './common.mjs';
import {RULES_LEVELS} from './constants.mjs';

const {OFF, ERROR} = RULES_LEVELS;

export default [
    ...getBaseConfig({
        MAX_CLASSES_IN_FILE: 2,
        MAX_CODE_DEPTH: 4,
        MAX_LINES_PER_FUNCTION: 120,
        MAX_NESTED_CALLBACKS: 3,
        MAX_FUNCTION_PARAMS: 4,
        MAX_COMPLEXITY: 10,
        globalsConfig: {
            ...globals.node
        },
        typescriptFiles: ['**/*.ts']
    }),
    {
        rules: {
            'no-alert': ERROR,
            'global-require': OFF,
            'handle-callback-err': ERROR,
            'no-buffer-constructor': ERROR,
            'no-path-concat': ERROR,
            'no-process-exit': OFF,
            'no-inline-comments': ERROR,
        }
    }
];
