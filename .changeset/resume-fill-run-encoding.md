---
"@marko/runtime-tags": patch
---

Run-length encode the resume payload: arithmetic runs of scope references serialize as `_.s(from,count[,step])` and consecutive identical scope fills as a negative repeat token, collapsing the per-iteration bookkeeping of large loops (branch lists, closure subscriber sets, repeated owner links) to constant size.
