---
description: Create a new feature module using standardized templates
agent: electron-architect
tools: ['execute']
---

# Scaffold Feature Workflow

Siga estes passos para criar uma nova feature:

1. Execute o gerador Plop para uma feature.
   Comando: `npm run generate feature`
   (Aguarde input do usuário para o nome da feature se necessário)

2. Verifique se a nova pasta da feature foi criada em `src/features/`.

3. Lembrete: Registre a nova feature no roteador da aplicação se ela tiver páginas.
   Arquivo: `src/app/router/index.tsx`

4. Rode o lint para garantir que o código gerado esteja em conformidade.
   Comando: `npm run lint`
