---
"@marko/runtime-tags": patch
---

A page whose `<define>` tag variable is passed to a child tag, or read in an `<if>` or `<for>`, no longer throws `_resumed[registryId] is not a function` on resume: the variable's registration is written only when its value can change in the browser, where the page's module that registers it loads.
