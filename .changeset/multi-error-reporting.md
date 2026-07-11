---
"@marko/runtime-tags": patch
---

Report every analyze-stage error in a template at once instead of stopping at the first. Tag-level analysis failures are collected (the failed tag's subtree is skipped to avoid cascading follow-on errors, identical duplicates are deduped, capped at 8) and thrown together from the program's analyze exit using the same aggregate format as parse errors. Templates with a single error produce byte-identical output. In controlled repair testing with weak coding agents, 94% of multi-error templates had every reported error fixed in a single round, collapsing fix loops from one-error-per-round to one-layer-per-round.
