---
"@marko/runtime-tags": patch
---

Error when a non string/void value is passed to a lowercase `on*` attribute on a native tag (e.g. `<button onclick=() => {}>`). Marko event handlers use the `onClick`/`on-click` form, so a lowercase `onclick` is treated as a plain native attribute and the value would have been silently stringified instead of attaching a listener. Lowercase `on*` attribute values must now be a string, `null`, `undefined`, or `false`. Statically known invalid values are reported as a compile error, and a `MARKO_DEBUG`-only runtime check catches dynamically passed invalid values; both suggest the correct camelCase handler name.
