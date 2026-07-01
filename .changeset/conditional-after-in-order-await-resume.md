---
"@marko/runtime-tags": patch
---

Fix a crash (`Cannot read properties of undefined (reading 'nodeType')`) and lost update when a control-flow tag (`<if>`, dynamic `<tag>`) rendered after a still-pending in-order `<await>` in the same scope has its branch changed by reactivity during resume. The trailing content streams in a later flush, so its resume marker was never walked in (no walk was emitted when the flush carried only markers and no effects), and an update racing that flush ran against an unresumed reference node. The final flush now emits the walk needed to bind such markers, and a control-flow update targeting a not-yet-resumed node is deferred and replayed once resume walks the node in.
