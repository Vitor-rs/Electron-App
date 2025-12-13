# Instruções do Copilot (Electron-App)

## Visão geral (arquitetura)
- **Electron Main (Node)** fica em `electron/main` (entrada: `electron/main/index.ts`).
- **Preload (bridge)** fica em `electron/preload/index.ts` e expõe `window.electronAPI` via `contextBridge`.
- **Renderer (React)** fica em `src` e **não deve importar `electron`** diretamente; todo acesso ao main é via `window.electronAPI.invoke()`.
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

## Padrão de IPC (exemplo prático)
- Canal/handler no main: `electron/main/ipc/handlers/user.handlers.ts` usa `ipcMain.handle('users:getAll', ...)` e chama `getDatabase()`.
- Consumo no renderer:
  - service: `src/features/users/services/user.service.ts` → `window.electronAPI.invoke<User[]>('users:getAll')`.
  - store (Zustand): `src/features/users/stores/user.store.ts` usa `persist` + `devtools` e chama IPC em actions async.

## Ao implementar novas features
- Prefira adicionar/consumir IPC através de um `*.service.ts` na feature e manter componentes focados em UI.
- Ao criar novos canais IPC: 1) criar `electron/main/ipc/handlers/<x>.handlers.ts`, 2) registrar em `electron/main/ipc/index.ts`, 3) expor chamadas no renderer via service/store.
