---
"@marko/runtime-tags": patch
---

Fix serialization dispatching on `val.constructor`, which let an own `constructor` property (e.g. in parsed JSON data) silently corrupt or drop the value. Values are now classified by their prototype's constructor.
