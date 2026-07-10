---
"@marko/runtime-tags": patch
---

Fix serialized `Error`/`AggregateError` values emitting invalid JS when the `cause`/`errors` value cannot be written inline (e.g. a circular reference back through the error), which aborted the entire resume script.
