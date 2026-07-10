---
"@marko/runtime-tags": patch
---

Fix serialized `-0` resuming as `+0` (the serializer otherwise preserves non-JSON numerics like `NaN` and `±Infinity`). Float typed array elements shared the same stringification and are also fixed.
