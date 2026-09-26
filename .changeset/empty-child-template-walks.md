---
"@marko/runtime-tags": patch
---

Fix client rendering crashing or updating the wrong nodes when a tag that renders no DOM (for example one with only a `<script>`) is the only child of an element or sits next to text.
