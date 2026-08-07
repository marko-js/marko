---
"@marko/runtime-tags": patch
---

A falsy `<for by>` value (e.g. `by=cond && "id"`) now means "no key" in the browser runtime, matching server rendering, instead of throwing `by is not a function` on update.
