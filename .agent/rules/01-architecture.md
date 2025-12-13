---
activation: always_on
---

# Architecture & Structure

## Feature-Based

Code is organized by **Feature** (Domain) logic, not just technical type.

### Directory Map

- `electron/main`: Backend logic (Node.js). NO React code.
- `electron/preload`: Bridge (Context Isolation).
- `src/features/[feature-name]`: Self-contained domains.
- `src/shared`: Reusable components.

## IPC Bridge & Security

- **Sandbox**: Enabled (`sandbox: true`) in `electron/main/index.ts` for enhanced security.
- **Type-Safe IPC**:
  - Define events in `src/shared/types/ipc.ts` (interface `IpcEvents`).
  - Renderer (`src`) NEVER imports `electron` directly.
  - Use `window.electronAPI.invoke('channel', data)` which infers types automatically from `IpcEvents`.

## Structure Visualization

To visualize the current project structure (excluding node_modules and docs), execute:
`python scripts/tree_project.py`
Agents should use this to understand the current file layout before creating new files.
