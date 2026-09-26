---
"@marko/runtime-tags": patch
---

Fix server rendering of a `<select>` or `<textarea>` whose attributes come from a spread. A spread without `value` no longer selects an `<option value="">` on the server while the browser keeps its default option, a `null` or `undefined` spread no longer throws `Cannot read properties of null`, and a spread with a falsy `valueChange` no longer renders a `valuechange` attribute that the browser render omits.
