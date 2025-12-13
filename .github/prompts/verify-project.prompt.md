---
description: Verify project health (Linting, Types, and Build)
agent: electron-architect
tools: ['execute']
---

# Verify Project Workflow

Execute as seguintes verificações de saúde do projeto:

1. Verifique o status do Git.
   Comando: `git status`

2. Execute o script de log de Lint/Prettier para capturar histórico de erros.
   Comando: `pwsh scripts/log_lint.ps1`

3. Execute o compilador TypeScript para verificar erros de tipo.
   Comando: `npm run typecheck`

4. Tente um build para garantir que a aplicação empacote corretamente.
   Comando: `npm run build`
