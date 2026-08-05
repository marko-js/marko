---
"@marko/runtime-tags": patch
---

Stop exporting the internal `forOfBy`, `forInBy` and `forStepBy` loop-key helpers from the html runtime entry. Generated code has not referenced them since loop keying moved into the runtime.
