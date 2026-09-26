---
"@marko/runtime-tags": patch
---

Render the same `<style>`, `<html-style>` and `<html-script>` text on the server and the client inside `<svg>` and `<math>`, where it parses as markup: a `&` in a `<style>` `${}` value is CSS escaped, and `<html-style>`/`<html-script>` escape their `${}` values and decode character references in their text there.
