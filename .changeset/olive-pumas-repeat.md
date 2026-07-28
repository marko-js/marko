---
"@marko/runtime-tags": patch
---

Report a default export in a template as a compile error. The template is compiled into the module's default export, so a second one silently produced a module with two.
