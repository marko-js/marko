---
"@marko/runtime-tags": patch
---

Add `applyUpdate` to the dom runtime: the persisted-pages merge driver that
deserializes an update-render payload (patch-local resume fills, `$global`
partials merged onto the live global), dispatches the template's compiled
`?update` merge function against the live root scope, and flushes the render
queue. Part of the experimental single-page server-first updates work.
