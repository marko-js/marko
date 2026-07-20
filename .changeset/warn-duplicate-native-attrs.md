---
"@marko/runtime-tags": patch
---

Warn at compile time when a native element sets the same attribute more than once. `<div class="card" class="override">`, `<button onClick(){…} onClick(){…}>`, or `<img id=a id=b>` previously collapsed to the last occurrence with no diagnostic, even though Marko already errors for the analogous `<let>`/`<const>`/`<script>` duplicates. The compiler now emits a warning naming the duplicated attribute (the last value is still the one applied).
