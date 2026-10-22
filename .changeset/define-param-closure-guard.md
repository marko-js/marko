---
"@marko/runtime-tags": patch
---

A page whose `<define>` body reads one of the page's functions under its params (inside `<if=on>`, say) no longer throws `_resumed[registryId] is not a function` on resume when another tag on the page is interactive. The server now writes the function only where a call can change the param in the browser.
