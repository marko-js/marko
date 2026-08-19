---
type: perf
impact: med
effort: med
site: packages/runtime-tags/cheatsheet.md › Golden rules
---

# Document the resume-payload cost of per-item custom tags

No user-facing doc warns that one custom tag per grid/list cell dominates page weight. Measured with the repo's own optimize bundle (a `<let>` holding a 16x16 array of `{mine,revealed,flagged,adjacent}`, one `<mine-cell>` per cell, SSR): 45.8 kB page = 28.6 kB resume script + 11.7 kB of `<!--M…-->` marker comments; the n=8→n=16 slope is ~112 B of resume data plus ~46 B of markers per instance. Only ~11 kB of the payload is the 256 serialized cell objects; the rest is per-instance bookkeeping — one scope entry each (`{"#ClosestBranchId":N,e:_(N,"a0"),…}`, `"G"` in prod) plus, when the item body reads a parent `<let>`, one `_(id)` per instance in that binding's `ClosureScopes` set on the owner scope (`new Set([_(4),_(6),_(8)])`, see the `at-tags-for-loop-param-intersection-closure` snapshot). `<let>` also has no way to declare a recomputable/lazy initial value, so a grid that is a pure function of input is serialized in full. `cheatsheet.md` covers syntax only (`grep -in payload` returns nothing today) and `RESUMABILITY.md` is a contributor doc; a second addition to the same `Golden rules` list is pending in the entry "Cover `static` for module-level values and helpers in cheatsheet.md", so budget that file's space once. Add a short guidance block (flat primitive state, repeated leaf cells as plain elements in the parent, recomputable state via `<const>`), and separately consider compressing the per-instance scope-entry encoding.

Check: TODO
