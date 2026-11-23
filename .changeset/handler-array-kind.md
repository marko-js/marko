---
"@marko/runtime-tags": patch
---

An array or object literal as a native tag's event or change handler, written in place (`onClick=[input.action]`) or named through a `<const>`, is now a compile error, instead of throwing when rendered in debug builds and when the event fires in optimized ones. A `<let>` `valueChange=` that names such a `<const>` is now a compile error too.
