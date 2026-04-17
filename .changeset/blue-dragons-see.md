---
"marko": patch
"@marko/runtime-tags": patch
---

Fix escaping issue for dynamic text interpolation inside `<script>`, `<style>`, `<html-script>` and `<html-style>` tags.

The issue was that the escaping logic for those tags used a CASE SENSITIVE search for the closing tag which could be bypassed like so:

```marko
<script>${"</SCRIPT><img src=x onerror=alert('uh oh')>"}</script>
```

Note that `script` and `style` there should _never_ render unsanitized user defined values, regardless of wether or not the closing tag is escaped, since these are conceptually just "eval".
