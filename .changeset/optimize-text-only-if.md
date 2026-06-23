---
"@marko/runtime-tags": patch
---

Optimize text rendering: collapse text-only `<if>`/`<else>` chains in native elements to a single placeholder, escape only the dynamic parts of a placeholder (static strings are escaped at compile time), and hoist static leading/trailing text out of placeholders into static text nodes.
