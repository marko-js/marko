---
"@marko/compiler": patch
---

With `errorRecovery`, a template whose parse, migrate, transform or analyze recorded an error now compiles to an empty module with its diagnostics, as it would throw without recovery, instead of translating past the error into a crash, an endless loop, or code that does not parse.
