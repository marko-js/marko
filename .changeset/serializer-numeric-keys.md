---
"@marko/runtime-tags": patch
---

Fix serialized object keys made of digits beyond 2**53 (e.g. 64-bit/snowflake ids) resuming as a different key. Bare numeric keys are canonicalized through `ToString(ToNumber(...))`, so digit runs that do not survive that round trip are now quoted.
