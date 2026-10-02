---
"@marko/runtime-tags": patch
---

Apply a native spread of an alias of a `<const>` alias, such as `<const/o=input.attrs/><const/p=o/><div ...p/>`, on the client. It read a value its source never stored, so the attributes were missing after a client render.
