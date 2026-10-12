---
"@marko/compiler": patch
---

Check each cached template at most once per compile. A taglib file newer than the cache, or missing, no longer crashes a compile that passes input to a custom tag, or overflows the stack on templates that render each other.
