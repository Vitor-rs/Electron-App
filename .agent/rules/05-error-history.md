---
activation: always_on
---

# Lint Error History & Prevention

## Historical Context

We maintain a persistent log of linting and formatting errors in `.agent/lint_history.txt`.
**Purpose**: To allow Agents to learn from past mistakes and avoid recurring issues (e.g., repeating the same invalid import or type error).

## Workflow

1. **Detection**: Run `/verify_project` (or `pwsh scripts/log_lint.ps1`) to verify code and append errors to the log.
2. **Analysis**: Before fixing, check the end of `.agent/lint_history.txt` to see the exact errors.
3. **Prevention**: If you see the same error appearing multiple times in the history, STOP and rethink the approach. Do not apply the same failed fix.
