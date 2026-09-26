---
type: bug
impact: med
effort: low
site: packages/runtime-class/src/runtime/html/helpers/escape-script-placeholder.js › escapeScriptHelper
---

# Escape class-API `<script>` placeholders like Marko 6 so JSON script types stay valid

`escapeScriptHelper` rewrites `</script` to `\x3C/script`, which JavaScript decodes but JSON rejects, so a class-API `<script type="application/ld+json">${JSON.stringify(data)}</script>` (or `importmap`, `speculationrules`) renders invalid JSON whenever `data` contains `</script`. It also leaves `<!--` and `<script` raw; together they put the parser in the double-escaped state, where `</script>` no longer closes the element and the rest of the page becomes script text. `packages/runtime-tags/src/html/content.ts › escapeScriptStr` handles both (`/<(\/?script|!--)/gi` to `\u003C$1`); use the same here (the translator's compile-time folding in `translator/placeholder/index[html].js` and `runtime/helpers/load-tag.js` share this helper), with a `marko` changeset.

Check: `node -e 'const e=require("./packages/runtime-class/src/runtime/html/helpers/escape-script-placeholder.js");JSON.parse(e(JSON.stringify({a:"</script>"})))'` throws `Bad escaped character in JSON`, and `e(JSON.stringify({a:"<!--<script>"}))` returns its input unchanged.
