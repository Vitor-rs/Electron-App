---
description: Create a new feature module using standardized templates
activation: manual
---

// turbo-all

1. Execute the Plop generator for a feature.
   Command: npm run generate feature

2. Verify that the new feature folder was created in src/features/.

3. Add IPC types in src/shared/types/ipc.ts:
   - Add channel definitions for: getAll, getById, create, update, delete

4. Register the handler in electron/main/ipc/index.ts:
   - Import registerFeatureNameHandlers
   - Call it inside registerIpcHandlers()

5. **IMPORTANT**: Update ALLOWED_CHANNELS in electron/preload/index.ts:
   - Add all new channel names to the Set

6. (Optional) Register routes in src/app/router/index.tsx if feature has pages.

7. Run lint to ensure compliance:
   Command: npm run lint
