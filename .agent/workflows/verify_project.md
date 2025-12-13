---
description: Verify project health (Linting, Types, and Build)
activation: manual
---

// turbo-all

1. Check Git Status (MCP)
   Command: `git status`

2. Run Lint/Prettier Logging Script to capture error history.
   Command: `pwsh scripts/log_lint.ps1`

3. Run TypeScript compiler to check for type errors.
   Command: `npm run typecheck`

4. Attempt a build to ensure the application bundles correctly.
   Command: `npm run build`
