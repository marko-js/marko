---
"@marko/compiler": patch
---

Require htmljs-parser 5.22.2, which no longer throws on a line comment in a text tag's open tag (`<script// a</script>`).
