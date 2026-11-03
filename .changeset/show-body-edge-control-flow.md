---
"@marko/runtime-tags": patch
---

Fix `<show>` when its body starts or ends with control flow (an `<if>`, a `<for>`, a nested `<show>`, or a tag whose template starts or ends with one): hiding a `<show>` the server rendered hidden could leave its body visible or also remove the content after it, and showing a body that changed while hidden, or a `<show>` that is its element's only child and the client rendered hidden, could insert stale nodes or nothing. A body the server rendered hidden now stays hidden where it is until first shown, instead of being inserted and removed again on its first update. A body that does not end in a static element no longer gets an end marker: each such template loses a `<!>`, a walk step and an argument, and each instance a cloned node and a scope slot.
