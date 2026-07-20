---
"@marko/runtime-tags": patch
---

Fix a controlled `<select>` / `<input type=checkbox|radio>` selecting a different option on the server than on the client when its value is `0n` or `NaN`. The SSR value normalizer (`normalizeStrAttrValue`) dropped `0n`/`NaN` to `""` while the DOM normalizer wrote `"0"`/`"NaN"`, so e.g. a controlled `<select value=0n>` with `<option value=0>` and `<option value="">` marked the empty option selected under SSR but the `0` option on the client, a hydration mismatch. The HTML normalizer now mirrors the DOM one (`isNotVoid(value) && value !== true`), so both pick the same option. (`false` already agreed, normalizing to `""` on both sides.)
