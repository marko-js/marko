---
"@marko/runtime-tags": patch
---

Give every parameterless arrow in the client runtime, the client code the compiler generates (lazy loaders, setup and argument getters) and the inlined reorder runtime an unused parameter, which minifies a byte smaller (`e=>` instead of `()=>`), so pages ship a few bytes less.
