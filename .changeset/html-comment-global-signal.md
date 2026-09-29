---
"@marko/runtime-tags": patch
---

Fix `$global` and `$signal` inside `<html-comment>`. A `$global` read there threw `$global is not defined` during the server render, and `$signal` crashed the client compile instead of giving the comment's expression its own abort signal.
