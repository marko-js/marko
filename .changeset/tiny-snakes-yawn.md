---
"@marko/compiler": patch
---

The builders, validators and definitions `types` exports are plain properties rather than getters, two deep for builders such as `identifier`, so reading one calls nothing and the compiler loads faster.
