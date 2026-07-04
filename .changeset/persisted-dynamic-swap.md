---
"@marko/runtime-tags": minor
---

Persisted updates can now swap a dynamic tag to a renderer the live page
has never rendered — the divergence point of a cross-route navigation.
Persisted builds always register content sections (`_content_resume`) and
register dynamic-tag signals; when an update patch's serialized renderer id
differs from the live one, the update merge resolves the registered
renderer (bound to the patch branch's owner scope, whose values are the
update's data) and replays the dynamic tag's own signal — a fresh branch
built from the renderer's static parts, filled from the patch by the
renderer's registered update merge. Matched renderers keep today's
in-place merge. This also fixes the optimized-build layout-hop dispatch,
which previously no-op'd persisted updates through `<${input.content}/>`.
