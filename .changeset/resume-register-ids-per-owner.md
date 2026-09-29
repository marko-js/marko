---
"@marko/runtime-tags": patch
---

Fix a resumed page running one `<script>` twice and never running another, or leaving content un-updated, when nested content reads a variable from an outer section that has the same name as one of its own.
