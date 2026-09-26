---
"@marko/runtime-tags": patch
---

Fix a `Cannot read properties of undefined` error after resume when a template or `<define>` that renders itself reads the tag variable of its recursive call and that returned value changes in the browser.
