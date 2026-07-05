---
"@marko/runtime-tags": patch
---

`$signal` abort-ids are now allocated in per-translate state
(`createSectionState`) instead of a module-level map keyed by section.
Sections are cached-analysis objects that outlive compiles — the compiler
`cache` shares one analyzed file across every output/entry kind and each
compile translates a clone — so the old map leaked allocations across
compiles of the same cached file and drifted the ids (`$signal(scope, 0)`
→ `1`) on the second dom-mode translate of the same cached file.
