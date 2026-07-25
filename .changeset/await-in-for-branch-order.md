---
"@marko/runtime-tags": patch
---

Fix an `<await>` inside a `<for>` throwing on the client. `_await_promise` read the await counter off a branch that `_await_content` had not created yet, since a loop invokes its params before the queued setup that builds the branch, so `<for|item| of=items><await|v|=item.promise>` died with `Cannot read properties of undefined (reading '#AwaitCounter')` on first render. The promise handshake is now deferred and driven by `_await_content`, matching what the non-promise path already did.
