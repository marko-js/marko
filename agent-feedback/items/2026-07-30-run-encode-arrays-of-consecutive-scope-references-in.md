---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/html/serializer.ts › writeArray
---

# Run-encode arrays of consecutive scope references in the resume payload

A monotonically increasing list of distinct scope ids is the least compressible thing in the resume payload: `forBranches` (`html/writer.ts`) accumulates `loopScopes` and writes `writeScope(scopeId, { [BranchScopes + accessor]: loopScopes })`, which the serializer emits as `Ab:[_(2),_(4),_(6),…,_(258)]` — on `<let/n=0/><button onClick(){n++}>+</button><for|i| to=129><c i=i n=n/></for>` with `c.marko` = `<div>${input.i}:${input.n}</div>` (8072 raw / 924 brotli) that one array costs 147 brotli, 16% of the page, while carrying three numbers of information. A run form (`_r(start, count, stride)`) measures 7225/777 (-847 raw / -147 brotli, i.e. -6.6 raw / -1.14 brotli per entry); a plain per-entry delta form gets nearly the same (-595/-148). Add a scope-run helper to the serialize context and have `writeArray`/`writeSet` detect that every member has a defined `Reference` scope id forming a constant-stride run before falling back to per-element `_(id)`; the same encoding covers the `ClosureScopes` sets that appear as `Bx:new Set([_(9),_(11),…])`. The decoder is a loop beside `serializeContext` in `dom/resume.ts` and scopes are still created lazily by `getScope`, so resume does strictly less work.

Check: SSR that template and compare the `Ab:` array's brotli contribution before and after.
