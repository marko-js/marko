---
"@marko/runtime-tags": patch
---

Speed up the DOM render queue. The pending-render dedup table is now a `Map`
keyed by the integer render key instead of a plain object (whose large, sparse
integer keys forced V8 into slow dictionary mode), and the per-flush bookkeeping
no longer reallocates the heap array on every flush. This reduces the cost of a
flush by ~20–37% in an isolated queue microbenchmark, with the largest win on
the common single-render update.
