---
"@marko/runtime-tags": patch
---

Attribute tag content whose only client code is a `<return>` of its loop param no longer throws `TypeError: Cannot set properties of undefined (setting 'returns')` as its module loads in a debug build. Such content has no setup and no params of its own — its value arrives through a local closure — so the debug return mark had nothing to sit on and was written as `_return_setup()`; it now sits on an empty setup that the closure wrapper composes with. The optimized build drops the mark, so these pages broke only outside production builds.
