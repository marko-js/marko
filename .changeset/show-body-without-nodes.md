---
"@marko/runtime-tags": patch
---

Fix a resumed `<show>` whose body renders no node (only a `<script>` or a static `<style>`) removing the node before it when hidden.
