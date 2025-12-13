# Architecture & Development Guidelines

## Tech Stack

- **Runtime**: Electron + Node.js (Main Process)
- **Frontend**: React + Vite + TypeScript (Renderer)
- **Database**: SQLite (better-sqlite3) + Drizzle ORM
- **State Management**: Zustand
- **Styling**: TailwindCSS + Shadcn/ui
- **Validation**: Zod
- **API/Bridge**: Type-safe IPC via `electronAPI`

## Directory Structure (Feature-Based)

Adhering to Domain-Driven Design principles, code is organized by **Feature**.

```
src/
├── app/               # App-wide providers, layouts, router
├── features/          # Domain features (e.g., users, dashboard)
│   └── user/
│       ├── components/ # React components specific to feature
│       ├── hooks/      # React hooks specific to feature
│       ├── services/   # Business logic / API calls
│       ├── stores/     # State management (Zustand)
│       ├── types/      # Feature-specific types
│       └── schemas/    # Zod schemas
├── shared/            # Reusable core components/hooks
    ├── components/ui/ # Shadcn UI components
    └── lib/           # Utilities
```

## Conventions

### File Naming

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Stores**: `kebab-case.store.ts` (e.g., `user-profile.store.ts`)
- **Services**: `kebab-case.service.ts`
- **Schemas**: `kebab-case.schema.ts`
- **Hooks**: camelCase (e.g., `useAuth.ts`)

### Code Quality

- **Strict Typing**: No `any`. Use generics and shared types.
- **Early Returns**: Avoid deep nesting.
- **SOLID**: Single Responsibility Principle is paramount.
- **No Gambiarras**: Fix root causes (env vars, types) rather than patching.

### Workflow & Automation

- **Component Creation**: Use `npm run generate` (Plop) to scaffold features/components correctly.
- **Quality Gates**: `npm run lint` and `npm run typecheck` MUST pass before commit (enforced by Husky).
- **Format**: Prettier is enforced via ESLint.

## Electron Specifics

- **Main Process**: `electron/main` (Node.js environment).
- **Preload**: `electron/preload` (Bridge).
- **Renderer**: `src` (Web environment).
- **Communication**: Renderer calls `window.electronAPI.invoke()`. NEVER import `electron` directly in React components.
