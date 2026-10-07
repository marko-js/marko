---
"@marko/runtime-tags": patch
---

Escape `</script`, `<script` and `<!--` in server-rendered `<html-script>` text as `\u003C`, so JSON script types (`application/ld+json`, `importmap`, `speculationrules`) whose data contains them stay valid JSON.
