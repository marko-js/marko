---
"@marko/runtime-tags": patch
---

A native dynamic tag's variable resumes when the tag's own signal is left out of the bundle (a constant tag name), instead of reading `undefined`. A variable the client never reads no longer registers its getter.
