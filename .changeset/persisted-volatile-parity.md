---
"@marko/runtime-tags": patch
---

Persisted navigations now match MPA reload semantics for volatile
expressions: dynamic expressions with no tracked sources (not
compile-time-foldable and derived from nothing in the source lattice, eg
`new Date()`, module state, impure calls) are treated like `$global` reads —
markers under the persisted flag, fresh values in every update render —
including through `<const>` derivations. `let` initializers are excluded:
client state survives navigation by definition.
