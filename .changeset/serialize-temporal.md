---
"@marko/runtime-tags": patch
---

Serialize `Temporal` values so they can be read from content that updates in the browser. Each type is rebuilt from its own string form, preserving calendar and time zone annotations along with nanosecond precision.
