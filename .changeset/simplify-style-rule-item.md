---
"@marko/runtime-tags": patch
---

Shrink and speed up the dynamic `<style>` runtime: `;` and `{` in interpolated values are now hex escaped in a single pass (so a raw `;` always ends a declaration and a raw `{` is always the rule opener, letting the client-side updater splice with `indexOf` instead of an escape-aware scan), the shell selector drops its whitespace, the shell helper applies the `nonce` itself instead of a separate generated statement, and unchanged rule text no longer rewrites the style element.
