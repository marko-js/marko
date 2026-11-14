---
"@marko/compiler": patch
---

Set up the compiler's Babel plugin once per set of options instead of on every compile (the parse stage of 2,882 templates takes about 1,035 ms, from 1,210 ms).
