---
"@marko/runtime-tags": patch
---

Skip importing and calling a child template's setup export when compile time analysis proves it is a noop. This compounds: a component whose setup only called such children now exports a noop setup itself, letting its own parents skip the call too.
