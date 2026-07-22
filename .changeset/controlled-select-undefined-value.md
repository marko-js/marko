---
"@marko/runtime-tags": patch
---

Fix a controlled `<select>` with a void (`undefined`/`null`) value selecting a different `<option>` on the server than the client: SSR now normalizes a void value to `""` and marks a `value=""` option `selected`, matching DOM instead of letting the browser auto-pick the first option.
