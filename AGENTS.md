# Marko Monorepo

## Packages

### [`packages/compiler`](packages/compiler)

`@marko/compiler` compiles `.marko` into `.js` using installed babel-based `translator` from either `packages/runtime-class` or `packages/runtime-tags`.

API: `src/index.js`.
Config: `src/config.js`.

### [`packages/runtime-class`](packages/runtime-class)

Package names: `marko@5`, `@marko/runtime-class`

See [`packages/runtime-class/AGENTS.md`](packages/runtime-class/AGENTS.md).

### [`packages/runtime-tags`](packages/runtime-tags)

Package names: `marko@6`, `@marko/runtime-tags`

See [`packages/runtime-tags/AGENTS.md`](packages/runtime-tags/AGENTS.md).

## File Organization

### Top-down structure (progressive disclosure)

Files should be organized from most important to least important:

1. Public API (exports)
2. High-level orchestration logic
3. Helper functions
4. Low-level implementation details

Use function declaration hoisting to enable this structure.
