---
"@marko/compiler": minor
"@marko/runtime-tags": patch
---

Report every analyze-stage error in a template at once instead of stopping at the first. `@marko/compiler/babel-utils` gains `deferCompileError(path, error)` and `throwDeferredCompileErrors(path)`: deferring lets a compile stage keep going and report everything it finds in the same aggregate form as parse errors (identical duplicates deduped, capped at 8), and the compiler throws whatever was deferred at the end of each compile stage. The tags translator defers tag-level analysis failures (the failed tag's subtree is skipped to avoid cascading follow-on errors) and throws them together from the program's analyze exit. Templates with a single error produce byte-identical output. In controlled repair testing with weak coding agents, 94% of multi-error templates had every reported error fixed in a single round, collapsing fix loops from one-error-per-round to one-layer-per-round.
