---
"@marko/runtime-tags": patch
---

In debug builds, report a locked `ReadableStream` sent to the browser instead of silently dropping it, and say in the unserialized `$global` read warning that serialized globals are embedded in the page, so only non-secret values belong in `serializedGlobals`.
