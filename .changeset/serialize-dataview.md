---
"@marko/runtime-tags": patch
---

Serialize `DataView` so it can be read from content that updates in the browser. A `DataView` or typed array over a buffer that cannot be serialized (e.g. `SharedArrayBuffer`) is now reported as unserializable instead of emitting a malformed constructor call that broke the whole payload.
