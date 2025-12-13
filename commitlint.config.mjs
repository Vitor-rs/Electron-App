export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // nova feature
        'fix',      // correção de bug
        'docs',     // documentação
        'style',    // formatação (não afeta lógica)
        'refactor', // refatoração
        'perf',     // performance
        'test',     // testes
        'build',    // build system
        'ci',       // CI/CD
        'chore',    // manutenção
        'revert',   // reverter commit
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'body-max-line-length': [2, 'always', 100],
  },
}
