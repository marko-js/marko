---
"@marko/runtime-tags": patch
"marko": patch
---

Fix a lone spread that resolves to `null`, `undefined`, or `false` on a controllable element (such as `<input ...maybeNull>`) crashing the render with a `TypeError` instead of producing an attribute-less element. Both the server and client attribute helpers now guard the controllable path against a nullish spread.
