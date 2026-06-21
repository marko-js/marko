---
"@marko/runtime-tags": patch
---

Fix event handlers applied through a spread (`<div ...attrs>`) not being removed when they are dropped from the spread on a later render. Delegated handlers are stored on the element, and only the handlers present in the current render were (re)applied — there was no pass to clear one that had disappeared (plain attributes are cleared via the `el.attributes` scan; events had no equivalent). A removed handler therefore stayed attached and kept firing. Handlers absent from the spread are now reset.
