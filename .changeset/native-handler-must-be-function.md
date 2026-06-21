---
"@marko/runtime-tags": patch
---

Error when a non-function value is passed to a native tag event handler (`onClick`, `on-click`, …) or change handler (`valueChange`, `checkedChange`, `openChange`, …). Previously a value like `<button onClick=5>` or `<input value=x valueChange="handler">` silently compiled and the handler was wired up with a non-function (or dropped), doing nothing at runtime. Handler values must now be a function or a falsey value — falsey values (`null`, `undefined`, `false`, `0`, …) are still allowed and mean "no handler", matching the runtime, so patterns like `onClick=items.length && (() => …)` continue to work. Statically known invalid values are reported as a compile error; a `MARKO_DEBUG`-only runtime check catches dynamically passed invalid values.

The lowercase `on*` attribute check (e.g. `<button onclick=…>`) is aligned to the same falsey rule: its value must be a string or a falsey value (including `0`, `""`, etc.), not just `null`/`undefined`/`false`.
