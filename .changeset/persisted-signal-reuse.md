---
"@marko/runtime-tags": patch
---

Browser-code reuse for persisted updates: when a hole's referenced bindings
are all live client state or patched update values whose registered signal
the merge invokes, the update render skips the hole's `_hole_value` capture
and the update entry skips its placement -- the client's already-loaded
signal chain re-renders it from patched scope values, eliminating
double-shipped computed values. Value gates now classify by the binding's
own source class (a state-free binding forced by a state-mixing reader
still rides update patches), which also fixes stale mixed attrs across
navigations.
