---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/html/writer.ts › flushSerializer
---

# Write a patch page's scope 0 props in the globals record

A patch page's `$global` subscriber sets (`_fill_global_subscribe`) are scope 0 props written before the first flush, which also writes the globals as scope 0. `flushSerializer` pushes the globals entry (`[0, globals, globals]`) and then scope 0's props as a second entry, so the payload names scope 0 twice (`…}, -1, {…`, about 5 B per page). Folding the props into the globals record saves the bytes; do it without `Object.assign` on the filtered globals or `delete` on `writeScopes` (both rejected in review), for example by having the scope loop skip scope 0 once its props joined the globals record, and measure.

Check: `packages/runtime-tags/src/__tests__/fixtures/patch-child-global-mix/__snapshots__/writes.html` writes `flag: "!"` then `}, -1, {` with the subscriber set as a separate scope 0 entry.
