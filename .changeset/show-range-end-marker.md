---
"@marko/runtime-tags": patch
---

Give `<show>` an explicit end marker so control flow in its body cannot invalidate the range, which previously removed unrelated siblings, left the toggle stuck, or crashed on reveal.
