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

3. Adicione os tipos IPC em `src/shared/types/ipc.ts`:

   ```typescript
   'feature-name:getAll': {
     request: []
     response: FeatureName[]
   }
   ```

4. Registre o handler em `electron/main/ipc/index.ts`:

   ```typescript
   import { registerFeatureNameHandlers } from './handlers/feature-name.handlers'
   // ... dentro de registerIpcHandlers():
   registerFeatureNameHandlers()
   ```

5. **IMPORTANTE**: Atualize `ALLOWED_CHANNELS` em `electron/preload/index.ts`:

   ```typescript
   const ALLOWED_CHANNELS = new Set<keyof IpcEvents>([
     // ... existing channels
     'feature-name:getAll',
     'feature-name:getById',
     'feature-name:create',
     'feature-name:update',
     'feature-name:delete',
   ])
   ```

6. Registre a feature no roteador se ela tiver páginas.
   Arquivo: `src/app/router/index.tsx`

7. Rode o lint para garantir conformidade.
   Comando: `npm run lint`
