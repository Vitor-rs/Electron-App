---
activation: always_on
---

# Security Guidelines

## Overview

This project implements multiple security layers following Electron official best practices.
Full documentation is available in docs/SECURITY.md.

## Core Security Features

### Main Process (electron/main/index.ts)

- sandbox: true - Renderer isolation
- contextIsolation: true - Preload script separation
- nodeIntegration: false - No Node.js in renderer
- webviewTag: false - Webview disabled
- Permission Handler - Whitelist-based permissions
- Navigation Blocking - External URLs blocked

### Preload Script (electron/preload/index.ts)

- **ALLOWED_CHANNELS**: Only whitelisted IPC channels can be invoked
- When adding new IPC channels, you MUST update ALLOWED_CHANNELS

### Content Security Policy (index.html)

Strict CSP with object-src none, frame-ancestors none, etc.

## Workflow: Adding New IPC Channels

When creating a new feature with IPC, follow this order:

1. Add types in src/shared/types/ipc.ts
2. Create handler in electron/main/ipc/handlers/name.handlers.ts
3. Register handler in electron/main/ipc/index.ts
4. Update ALLOWED_CHANNELS in electron/preload/index.ts
5. Create service in src/features/name/services/name.service.ts

> Forgetting step 4 will cause runtime errors

## Allowed Permissions

Modify whitelist in electron/main/index.ts:

- clipboard-read
- clipboard-write
- notifications

## Security Audit

Run npm run security:check or use workflow /security_audit to verify.
