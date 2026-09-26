---
"@marko/runtime-tags": patch
---

Fix tag variables on children that return nothing or return after resume. A tag variable on a child, a `<define>` tag, or a dynamic tag whose content has no `<return>` is now `undefined` in the browser as it is on the server, including after a dynamic tag switches from content that returns to content that does not. A dynamic tag's variable now also updates after resume when its content returns a new value, even if that content sends no other state to the browser.
