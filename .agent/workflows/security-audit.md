---
description: Run security audit on the project
---

# Security Audit Workflow

Run this workflow to check for security vulnerabilities and code quality issues.

## Steps

// turbo-all

1. Run npm audit to check for vulnerable dependencies:
   Command: `npm audit --audit-level=high`

2. Run ESLint to check for code quality issues:
   Command: `npm run lint`

3. Run TypeScript check to verify type safety:
   Command: `npm run typecheck`

4. (Optional) Run full security check:
   Command: `npm run security:check`
