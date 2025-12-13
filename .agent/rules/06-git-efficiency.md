---
activation: always_on
---

# Git Efficiency & Context

## purpose

This rule mandates the use of the **Git MCP Server** to maintain context and ensure safety.

## Guidelines

1. **Context Awareness**
   - Before starting a complex task, check the current state:
     - Use `git_status` to see modified files.
     - Use `git_log` to understand recent changes in the `feature` you are working on.

2. **Safety Checks**
   - Before applying a fix:
     - Use `git_diff` to verify what you are about to change.
   - After applying a fix:
     - Use `git_diff` again to verify the _actual_ change matches your _intent_ before considering the task done.

3. **Verification**
   - If a test fails, use `git_diff` to see if recent changes caused it.
