---
"@marko/runtime-tags": patch
---

Persisted builds adopt a render-once contract for expressions outside the
sanctioned server channels: dynamic expressions with no tracked sources
(not compile-time-foldable and derived from nothing in the source lattice,
eg `new Date()`, module state, impure calls) are computed at page load and
navigations never refresh them — no resume markers, no update captures.
This matches the client reactive model (nothing drives a refs-less
expression, so a client-side state update wouldn't refresh it either) and
makes pure and state-mixed uses of the same expression behave uniformly.
Data the server should refresh on navigation must be read from `$global`
or input.

Stable branch sets over such render-once values still participate in
updates: a `<for>`/`<if>` whose list or test never refreshes (eg a loop
over a module constant — the filter-chip shape) but whose body reads
`$global` or input keeps its branch machinery, so body merges dispatch
and the request-derived content inside refreshes. Client-state-driven
structure stays excluded as before.
