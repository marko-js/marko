---
"@marko/runtime-tags": patch
---

`$signal` abort-ids are now allocated once during analyze and stamped on
each expression root's extra, so every output/entry translate of a cached
file reads the same id — agreement across compiles is structural instead
of a property of identical visit order. Previously the ids were allocated
at translate time from a module-level map keyed by section; sections are
cached-analysis objects that outlive compiles — the compiler `cache`
shares one analyzed file across every output/entry kind and each compile
translates a clone — so the old map leaked allocations across compiles of
the same cached file and drifted the ids (`$signal(scope, 0)` → `1`) on
the second dom-mode translate of the same cached file.
