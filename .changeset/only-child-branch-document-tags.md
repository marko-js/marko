---
"@marko/runtime-tags": patch
---

Keep an `<if>`, `<for>`, or other control flow tag that is the only child of `<html>`, `<head>`, or `<body>` from removing nodes it did not render (such as resume scripts or injected elements) when it updates, and from skipping the asset flush before `</head>`, which put page assets ahead of the doctype.
