---
"@marko/compiler": patch
---

Keep the `marko/translator` interop translator when an app on `marko@5` also depends on `@marko/runtime-tags`, instead of switching to the translator that rejects the Class API. When two Marko runtimes are depended on, the compile error now names both and points at the `translator` option.
