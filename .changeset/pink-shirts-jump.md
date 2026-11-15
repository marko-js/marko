---
"@marko/runtime-tags": patch
---

Fix a `<for>` key read through a `<const>` rendering empty when content in a resumed row, such as an `<if>` toggled by state outside the loop, is shown again.
