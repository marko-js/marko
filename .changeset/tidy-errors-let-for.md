---
"@marko/runtime-tags": patch
---

Add compile-time errors for two cases that previously compiled silently with incorrect behavior:

- A `<let>` tag with a duplicate `value=` or `valueChange=` attribute (e.g. `<let/x value=1 value=2/>`) now errors instead of silently dropping one of them. This matches the existing single-attribute guards on `<const>`, `<id>`, and `<script>`.
- A `<for>` tag with more parameters than the loop provides (e.g. `<for|index, extra| to=3>` or `<for|value, index, extra| of=list>`) now errors. The extra parameters were always `undefined` since the runtime only passes `index` for `to`/`until` and `value, index` / `name, value` for `of`/`in`.
