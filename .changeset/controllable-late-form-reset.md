---
"@marko/runtime-tags": patch
---

A form reset now also updates the bound value of a controlled field that was rendered outside the document (such as inside a hidden `<show>`) and joined the form later, and a `reset` event dispatched from an element that is not a form no longer throws.
