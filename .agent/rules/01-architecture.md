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

## IPC Bridge

- Renderer (`src`) NEVER imports `electron` directly.
- Use `window.electronAPI.invoke('channel', data)`.

## Structure Visualization

To visualize the current project structure (excluding node_modules and docs), execute:
`python scripts/tree_project.py`
Agents should use this to understand the current file layout before creating new files.
