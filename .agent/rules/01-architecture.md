---
activation: always_on
---

# Architecture & Structure

## Feature-Based

Code is organized by **Feature** (Domain) logic, not just technical type.

### Directory Map

- electron/main: Backend logic (Node.js). NO React code.
- electron/preload: Bridge (Context Isolation).
- src/features/[feature-name]: Self-contained domains.
- src/shared: Reusable components.

### Documentation Structure

- **.template/**: Template documentation (ARCHITECTURE.md, SECURITY.md)
- **docs/**: Reserved for business documentation of projects using this template

## IPC Bridge & Security

- **Sandbox**: Enabled in electron/main/index.ts for enhanced security.
- **Type-Safe IPC**: Define events in src/shared/types/ipc.ts.
- **Channel Whitelist**: All IPC channels must be in ALLOWED_CHANNELS in electron/preload/index.ts.

## Adding New IPC Channels

1. Add types in src/shared/types/ipc.ts
2. Create handler in electron/main/ipc/handlers/
3. Register handler in electron/main/ipc/index.ts
4. **Update ALLOWED_CHANNELS** in electron/preload/index.ts
5. Create service in src/features/

See .template/SECURITY.md for full security documentation.

## Structure Visualization

Run: python scripts/tree_project.py
