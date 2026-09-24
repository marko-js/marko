---
"@marko/runtime-tags": patch
---

Emit a pending closure registration only where the server registers one. The DOM output gated the pending resume register id on the subscriber section's try placeholder alone, while the HTML output also requires a serialized dynamic closure with sources; the two now share the gate, so a closure the server can never replay no longer ships an id nothing looks up.
