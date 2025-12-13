---
activation: always_on
---

# Design System & React Principles (TkDodo Style)

## Core Philosophy

**"Help Teams Ship"** - The design system is a gateway to speed.

## Rules

1.  **Props Over Booleans**: Avoid `isBlue`, `isBig`. Use `variant="blue"`, `size="lg"`.
    - _Bad_: `<Button isPrimary isLarge />`
    - _Good_: `<Button variant="primary" size="lg" />`
2.  **Strict Type-Safety**:
    - Avoid `any`.
    - Use Zod for runtime validation equivalent to build-time types.
    - Export component Prop interfaces.
3.  **Composition > Configuration**:
    - Don't build a `TooltipButton` component. Build a `Button` that can be wrapped in a `Tooltip`.
    - "Tooltip Components Should Not Exist" -> The _concept_ exists, but avoid mega-components.
4.  **Colocation**: Types, Styles, and Logic should live close to where they are used.
5.  **State**: State syncing is evil. Prefer derived state.
    - Use `useMemo` for expensive derivations.
6.  **Accessibility (a11y)**: Built-in, not bolt-on. Use `aria-*` attributes correctly.
