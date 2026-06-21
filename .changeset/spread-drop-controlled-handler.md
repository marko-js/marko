---
"@marko/runtime-tags": patch
---

Fix a controlled form binding (`value`/`checked`/`checkedValue`/`open` together with its `*Change` handler) applied through a spread (`<input ...attrs>`) continuing to take effect after the spread drops it. The controlled handler and type were only written by the controllable setters and never cleared, so the persistent input listener kept firing the stale change handler and mutating state on an element that was no longer controlled. The binding is now reset each render and re-established only when the controlling attribute is still present.
