---
"@marko/runtime-tags": patch
"marko": patch
---

Fix a top-level `return` in a `<script>` tag short-circuiting the effects of following sibling `<script>`/`<lifecycle>` tags in the same section (they compile into a single shared effect). A script whose body has a top-level `return` is now kept as an isolated call so the `return` stays local.
