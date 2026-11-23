export default {
    extends: ['@commitlint/config-conventional'],
    rule: {
        'subject-case': [2, 'always', ['pascal-case', 'sentence-case', 'start-case', 'lower-case']],
        'body-empty': [2, 'never'],
        'subject-empty': [2, 'never'],
        'header-max-length': [1, 'always', 100],
        'scope-enum': [2, 'always', ['api', 'ui', 'db', 'deps']]
    }
}