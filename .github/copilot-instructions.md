# Instruções do Copilot (Electron-App)

## Visão geral (arquitetura)

- **Electron Main (Node)** fica em `electron/main` (entrada: `electron/main/index.ts`).
- **Preload (bridge)** fica em `electron/preload/index.ts` e expõe `window.electronAPI` via `contextBridge`.
- **Renderer (React)** fica em `src` e **não deve importar `electron`** diretamente; todo acesso ao main é via `window.electronAPI.invoke()`.
- **Segurança**: `sandbox: true` ativado no Main Process.
- **IPC**: handlers são registrados em `electron/main/ipc/handlers/*.handlers.ts` e agrupados em `electron/main/ipc/index.ts`.
- **DB local**: `better-sqlite3` + `drizzle-orm`.
  - Conexão singleton em `electron/main/database/client.ts` (arquivo em `app.getPath('userData')`, pragmas WAL/foreign_keys).
  - Schema/tipos em `electron/main/database/schema.ts` (ex.: `users`, `User`, `NewUser`).

## Comandos (workflows reais)

- Dev (Windows): `npm run dev` (usa `dev.bat` para limpar `ELECTRON_RUN_AS_NODE`).
- Build/preview: `npm run build`, `npm run preview`.
- Qualidade: `npm run lint`, `npm run lint:fix`, `npm run typecheck`, `npm run format`.
- Drizzle/SQLite: `npm run db:generate`, `npm run db:migrate`, `npm run db:push`, `npm run db:studio`.
- Scaffolding (Plop): `npm run generate` (geradores: `feature`, `component`, `store`; templates em `plop-templates/`).

## Convenções do projeto (padrões existentes)

- Estrutura por feature em `src/features/<feature>/` com `components/`, `services/`, `stores/`, `schemas/`, `types/` (ver feature `src/features/users`).
- **Aliases** (ver `electron.vite.config.ts` / `tsconfig.web.json`):
  - Renderer: `@` → `src`, `@features` → `src/features`, `@shared` → `src/shared`.
  - Main: `@main` → `electron/main` (no renderer é usado principalmente para tipos, ex.: `import type { User } from '@main/database/schema'`).

## Padrão de IPC (Type-Safe)

- **Definição de Tipos**: Adicione novos canais em `src/shared/types/ipc.ts` na interface `IpcEvents`.
- **Main**: `electron/main/ipc/handlers/user.handlers.ts` usa `ipcMain.handle('users:getAll', ...)` e chama `getDatabase()`.
- **Renderer**:
  - service: `src/features/users/services/user.service.ts` → `window.electronAPI.invoke('users:getAll')` (Tipos inferidos automaticamente).
  - store (Zustand): `src/features/users/stores/user.store.ts` usa `persist` + `devtools` e chama IPC em actions async.

## Ao implementar novas features

- Prefira adicionar/consumir IPC através de um `*.service.ts` na feature e manter componentes focados em UI.
- Ao criar novos canais IPC:
  1. Adicionar tipagem em `src/shared/types/ipc.ts`
  2. Criar `electron/main/ipc/handlers/<x>.handlers.ts`
  3. Registrar em `electron/main/ipc/index.ts`
  4. **Atualizar `ALLOWED_CHANNELS`** em `electron/preload/index.ts`
  5. Criar service em `src/features/<x>/services/<x>.service.ts`

> ⚠️ Esquecer o passo 4 causará erro: `IPC channel "x" is not allowed`

## Segurança

Este projeto implementa múltiplas camadas de segurança:

- **Main Process**: `sandbox`, `contextIsolation`, permission handlers
- **Preload**: Whitelist de canais IPC (`ALLOWED_CHANNELS`)
- **CSP**: Content Security Policy restritivo

Documentação completa: `.template/SECURITY.md`

Use `npm run security:check` para verificar vulnerabilidades.

## Estrutura de Documentação

- **`.template/`**: Documentação do template (ARCHITECTURE.md, SECURITY.md)
- **`docs/`**: Reservada para documentação de negócio do projeto que usar este template
