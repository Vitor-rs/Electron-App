---
activation: always_on
---

# Shadcn/UI Guidelines

## Usage Policy

We have a local copy of the Shadcn documentation and components in `.agent/shadcn_guide`.
**YOU MUST PREFER THIS LOCAL GUIDE OVER INTERNET SEARCH.**

## How to Explore the Guide

To view the full structure of the available documentation, run the following command:
`python scripts/tree_shadcn.py`
This will output the file tree of `.agent/shadcn_guide`.

## How to Find Components

1. **Explore**: Run the tree script above to locate the component you need.
2. **Read**: Look in `.agent/shadcn_guide/components_db/[Component].md` or `registry` for implementation details.
3. **Registry Fallback (MCP)**:
   - If the local guide is ambiguous or missing a specific registry item, use the **Shadcn MCP** tools.
   - Use `shadcn` tools to query the live registry for the latest component definitions (e.g., `@acme` components).

## LLM Helper

Refer to `.agent/shadcn_guide/llms.txt` for official documentation links if local context is insufficient.
