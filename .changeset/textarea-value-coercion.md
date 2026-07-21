---
"@marko/runtime-tags": patch
---

Fix an SSR/CSR mismatch for a `<textarea>` with a non-string initial `value`. SSR rendered the value as text content (`_escape`), while the client set `defaultValue` via the `value=` attribute normalization, so `true`/`NaN`/`0n` rendered differently after a client render/navigation than on the server (e.g. `<textarea value=computeTotal()>` yielding `NaN`). SSR now coerces a textarea's value the same way — matching the client and `<input>` — so both agree. String values are unaffected, and the client runtime is unchanged.
