---
"@marko/runtime-tags": patch
---

A tag whose name is written as a string and matches a Babel built-in global (`<Map/>`, `<Date/>`, `<Promise/>`) reported "Local variables must be in a dynamic tag unless they are PascalCase" even though nothing declares that name, because the compiler asked `scope.hasBinding`, which is also true for globals. It now asks for a declared binding, so the tag reports the accurate "Unable to find entry point for custom tag `<Map>`" (with the case-sensitive hint) and a `<let>`/`<const>` binding keeps the local-variable message.
