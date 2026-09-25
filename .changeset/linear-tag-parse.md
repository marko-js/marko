---
"@marko/compiler": patch
---

Parse a template in time linear in its tag count. Each parsed tag used to re-key every sibling parsed before it, so 16k sibling tags took about 2.9 s to parse instead of 0.35 s.
