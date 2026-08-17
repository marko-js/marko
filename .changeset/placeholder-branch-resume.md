---
"@marko/runtime-tags": patch
---

A streamed `<try>` placeholder with state now resumes as its own branch: its scopes ship with the flush that registers its effects (so lifecycles see their input), and swapping the body in destroys it — its listeners and effects no longer outlive it.
