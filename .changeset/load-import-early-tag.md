---
"@marko/runtime-tags": patch
---

A custom tag whose content reads `input` or contains an `<if>` now keeps what its import declares: a `load` import stays lazy on the client instead of being bundled into the page, and a name import (`import Wrap from "<wrap>"`) no longer compiles to a browser import of the unresolvable `"<wrap>"`. Using a `load` import above the import statement is now a compile error instead of a silent eager load.
