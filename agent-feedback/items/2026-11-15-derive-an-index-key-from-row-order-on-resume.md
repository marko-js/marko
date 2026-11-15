---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/html/control-flow.ts › forBranches
---

# Derive an index key from row order on resume instead of writing it per row

When a section a row owns reads the row's key and can be created after resume (an `<if>` toggled by state outside the loop), the key's write reason writes `LoopKey` into every row scope, even where the key is the row's index (`<for of>` without `by`, `<for to>`/`until` from 0 by 1). `forBranches` itself skips such a key (`sameAsIndex`) because the client loop reads a missing key as the row's index (`loop` in `dom/control-flow.ts`), but a branch's setup reads `$scope._.M` directly, so the server writes it anyway. On a 1,000-row state list that is about 10 B min and 0.7 B brotli per row (a row scope of `{M: n}` the server would otherwise not write at all). Setting `LoopKey` from each resumed row's position in its branch list would save that per row, for a fixed cost in resume code that only bundles with loops keep.

Check: a scratch fixture rendering `<let/show=true/><let/rows=Array.from({ length: 1000 }, (_, i) => "r" + i)/><for|item, index| of=rows><if=show>${index}</if></for>` (plus a handler writing `show` and `rows`) writes `{M: 0}, 1, {M: 1}, …` in `writes.html`, one row scope per row holding only its index.
