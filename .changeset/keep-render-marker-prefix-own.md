---
"@marko/runtime-tags": patch
---

Keep a render's resume comments its own. An `<html-comment>` value that starts with the render's resume comment prefix (such as `M_`) is now escaped on the server, so resume no longer adopts it as a marker and writes updates into it. A page entry compiled with a `runtimeId` and rendered inside another page no longer switches the enclosing render's `runtimeId`, which left the outer page unable to resume; development builds report the nested mismatch, and also report two renders on a page whose `$global.renderId`s start one another.
