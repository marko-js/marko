---
"@marko/runtime-tags": patch
"marko": patch
---

Read a template's input and return types from `Marko.Template` alone, rather than also from a member that only the language tools' generated types define, and type the result of a Marko 5 template's `mount` with its return type.
