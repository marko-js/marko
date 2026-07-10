---
"@marko/runtime-tags": patch
---

Fix `<script>` content escaping only handling `</script`. A body containing `<!--` followed by `<script` put the HTML tokenizer in the script-data double-escaped state, where the real `</script>` no longer closes the element and the rest of the page is swallowed into it. `<script` and `<!--` now receive the same `\x3C` escape, and the escaped remainder preserves its original case.
