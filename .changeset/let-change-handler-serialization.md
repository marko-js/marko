---
"marko": patch
"@marko/runtime-tags": patch
---

Skip serializing a controllable `<let>`'s `valueChange` handler when the variable is never reassigned. The handler is only read back on resume when the variable is actually assigned on the client, so it is now only serialized for `<let>`s with assignment sites. Shrinks the resume payload with no behavior change.
