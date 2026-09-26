---
"@marko/runtime-tags": patch
---

A controlled form field now updates its bound value before any `onInput` handler runs for the same `input` event, so handlers always read the new value instead of depending on which element's handler registered first. A form reset is now also reported for a controlled field that was rendered outside the document (such as inside a hidden `<show>`) and joined the form later, and a `reset` event dispatched from an element that is not a form no longer throws.
