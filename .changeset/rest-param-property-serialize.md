---
"@marko/runtime-tags": patch
---

A value read through a destructured rest param (`|{ id, ...rest }|` then `rest.extra`, or `|{ ...all }|` then `all`) no longer throws when the server serializes it.
