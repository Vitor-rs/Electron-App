---
activation: always_on
---

# Security Guidelines

This project implements security layers. See docs/SECURITY.md for details.

## Adding New IPC Channels

1. Add types in src/shared/types/ipc.ts
2. Create handler in electron/main/ipc/handlers/
3. Register in electron/main/ipc/index.ts
4. Update ALLOWED_CHANNELS in electron/preload/index.ts
5. Create service in src/features/

## Security Audit

Run: npm run security:check
