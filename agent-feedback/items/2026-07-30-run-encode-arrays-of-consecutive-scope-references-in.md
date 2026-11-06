---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/html/serializer.ts › writeArray
---

# Run-encode arrays of consecutive scope references in the resume payload

A list of distinct, evenly spaced scope ids is the least compressible thing in the resume payload, yet carries three numbers of information: closure subscriber sets serialize as `new Set([_(4), _(6), _(8)])` (`at-tags-for-loop-param-intersection-closure`), growing one `_(id)` per row, and `forBranches` (`html/control-flow.ts`) writes a marker-less loop's branch list the same way. A run form (`_.s(from, count, step)`) simulates on 100- and 1,000-row variants to −122 / −730 brotli for the closure set and −92 / −682 for the branch list; a per-entry delta form measures nearly the same and also fits uneven strides. Have `writeArray`, and `writeSet` through `writeArrayArg`, detect a constant-stride run of `Reference` scope ids before falling back to per-element `_(id)`, decoding to real arrays and sets since runtime code iterates them, and reserve the helper's name in `nextId` as `_` and `name` are (a 1,000-row page already hands out `s` as a reference id). A payload with a run throws without its decoder, so latch the decoder (like `branchesEnabled` in `common/helpers.ts`) from code that ships whenever the server can write a run, the readers of `ClosureScopes`/`BranchScopes`, so `.sizes/counter.ssr` and `.sizes/comments.ssr` do not grow (closed PR #3352 added +152 min / +66 brotli there; its `getScopeIdStep` is reusable, its repeat-fill token is not worth it). Keep it in the serializer state every document shares; the unmerged persisted-pages feature's patch flushes (`PatchSerializerState`) write no scope ids and must never emit it.

Check: SSR `at-tags-for-loop-param-intersection-closure` (or a 100-row variant) and compare the `new Set([...])` brotli contribution before and after; confirm `pnpm run build:sizes` leaves both floor entries unchanged.
