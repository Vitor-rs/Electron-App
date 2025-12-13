---
description: Create a new feature module using standardized templates
activation: manual
---

1. Execute the Plop generator for a feature.
   Command: `npm run generate feature`

2. Verify that the new feature folder was created in `src/features/`.

3. (Agent Reminder) Register the new feature in the application router if it has pages.
   File: `src/app/router/index.tsx`

4. Run lint to ensure the generated code complies with project standards.
   Command: `npm run lint`
