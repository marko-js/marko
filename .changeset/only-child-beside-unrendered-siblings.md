---
"@marko/runtime-tags": patch
---

Let an `<if>`, `<for>` or `<show>` use its parent element as its marker when its only siblings render nothing (such as `<let>`, `<const>`, `<script>` or a scriptlet), as it already did when it was the only child.
