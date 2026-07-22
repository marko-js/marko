---
"@marko/runtime-tags": patch
---

Compare a controlled multiple-`<select>`'s value to the DOM selection order-independently. Previously a set-equal but reordered value array spuriously fired `valueChange` (reordering the model to document order) whenever options were added or removed.
