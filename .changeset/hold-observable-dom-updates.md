---
"@marko/runtime-tags": patch
---

Add the ability to hold observable DOM updates in the client runtime. When a template has a state-derived (client-updatable) `<await>` value, renders still run to completion — consts compute, closures propagate, and control-flow branches are created and built — but the visible DOM writes they produce are buffered and applied after the render flush, before effects. Writes to detached nodes (a branch still being built) apply immediately.

Both kinds of held update supersede rather than accumulate: a construct that renders again before the drain commits once, straight from what is on screen to its latest value, releasing whatever the superseded render had built but never showed. So repeated updates cost one DOM change, not one per render.

Held writes cover value updates (`_text`/`_attr`/`_text_content`/class/style) to connected nodes, and the branch attach/detach for `<if>`/`<try>`/dynamic tags, `<for>` (whose reconciliation runs as one atomic step), `<show>`, `$!{...}` html, and the `<await>` machinery's own reveal/placeholder/detach transitions. Value updates are keyed by their target node, so repeated updates to the same node during a hold coalesce to the final value (no per-update allocation), and they apply before the structural commits so existing nodes reach their final values before branches are inserted or moved. Controlled form state (input value, checkbox, `<details>`/`<dialog>`) is intentionally never held, so a controlled input stays responsive to typing regardless of a pending hold. The extra runtime is enabled only when such an await exists and tree-shakes away otherwise.

This is the groundwork for holding these writes longer (for async transitions); today they drain within the same flush.
