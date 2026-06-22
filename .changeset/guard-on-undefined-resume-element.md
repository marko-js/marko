---
"@marko/runtime-tags": patch
---

Guard `_on` against an `undefined` element during resume. A torn or partially-delivered streamed `<await>`/`<try>` chunk can run a boundary's event-binding effect before its node has been walked, leaving the element unresolved. Previously `_on` threw `TypeError: Cannot read properties of undefined (reading '$<event>')`, which aborted the remaining resume effects and left the rest of the page un-hydrated. `_on` now skips binding when the element is missing (with a dev-mode warning), degrading gracefully instead of crashing the page. See [#3174](https://github.com/marko-js/marko/issues/3174).
