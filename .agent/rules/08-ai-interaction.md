---
activation: always_on
---

# AI Interaction Patterns

## 1. Component Prompt Formula

When asking for or generating components, follow this structure:

- **Functionality**: Core features, user interactions.
- **UI Requirements**: Styling (Tailwind), Responsiveness, State.
- **Technical**: Type safety, Compliance.
- **Production-Ready**: Error handling, edge cases.

## 2. The Instant IPC/Service Pattern

When creating Backend logic (Electron Main/Services):

- **Channels/Methods**: Define logical IPC actions (e.g., user:create, settings:get).
- **Features**: Validation (Zod), Database (Drizzle), Error Handling.
- **Technicals**: Async/Await, Strict Types, Documentation.

### IPC Security Checklist

When creating new IPC channels, you MUST:

1. Add types in src/shared/types/ipc.ts
2. Create handler in electron/main/ipc/handlers/
3. Register handler in electron/main/ipc/index.ts
4. **Update ALLOWED_CHANNELS** in electron/preload/index.ts
5. Create service in src/features/

> Forgetting step 4 will cause: IPC channel is not allowed

## 3. The Debug Detective

When debugging:

- **Context**: Environment, Framework versions.
- **Error**: Exact message.
- **Triad**: Root Cause -> Quick Fix -> Long-Term Solution.
