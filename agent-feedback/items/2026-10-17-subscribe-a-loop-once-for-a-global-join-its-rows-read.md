---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/html/patches/writer.ts › _fill_global_subscribe
---

# Subscribe a loop once for a `$global` join its rows read

A `$global` join in a `<for>` body in stateful structure subscribes every row: `_fill_global_subscribe` adds each row scope to the join's `ClosureScopes` set on the globals (scope 0), so a resumed page writes one `_(n)` per row, and `_fill_global_join` subscribes each row the client creates. A closure the same rows read instead walks the loop's own scopes (`_for_closure`), shipping no per-row set. Subscribing the loop's owner scope once and walking its branch scopes when a key changes, as a loop closure does, would drop the per-row entries.

Check: a patch fixture `<let/n=100/><button onClick() { n-- }>-</button><ul><for|i| until=n><li>${i}:${$global.x}</li></for></ul>` with `$global: { x: "a", serializedGlobals: ["x"] }` writes `new Set([_(2), … _(101)])` in `writes.html` (document 4284 / 762 B min / brotli); the same template reading `input.x` writes no set (3668 / 617 B).
