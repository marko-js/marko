---
"@marko/compiler": patch
"@marko/runtime-tags": patch
---

Report every analyze-stage error in a template at once instead of stopping at the first. Analyze failures are now recorded through the compiler's diagnostics channel (`diagnosticError`), and the compiler mirrors the parse layer by throwing all error diagnostics together at the end of the analyze stage (duplicates deduped, capped at 8) — or, when compiling with `errorRecovery`, keeping them as recoverable diagnostics for editors instead of throwing. The tags translator reports tag-level analysis failures this way, skipping the failed tag's subtree to avoid cascading follow-on errors. Templates with a single error produce byte-identical output.
