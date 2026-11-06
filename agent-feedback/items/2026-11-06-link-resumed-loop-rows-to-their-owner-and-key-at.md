---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/signals.ts › writeHTMLResumeStatements
---

# Link resumed loop rows to their owner and key at resume

Each resumed `<for>` row serializes data the client can rebuild from what the page already sends: a marker-less loop writes the parent's branch list (`Aa: [_(2), …]`) and then `{ _: _(1) }` per row (`writeHTMLResumeStatements`), and a keyed loop whose update code ships writes `{ M: key }` per row beside a serialized list that holds the same keys, read by the `by` that ships with that update code. Dropping the per-row keys measures −0.73 brotli per row with sequential ids (19% of a 1,000-row loop's resume script) and −1.37 with uuids (about 6%); the owner half saves about 0 when rows hold only `{ _: _(1) }` and −0.22 per row when they carry other data. Set both in one per-loop step at resume, before resume effects run, the owner from the branch list and the key by running `by` over the list as serialized, so every consumer (row code reading `$scope._`/`$scope.M`, `_for_selector`'s `keyedScopes`, reconciliation, and the unmerged persisted pages' row pairing and owner hops) sees today's shape. Derive keys only where the list is serialized and the loop's update code ships, and keep writing `M` elsewhere (a loop only the server updates, a derived list). Keep the helper out of `.sizes/counter.ssr` and `.sizes/comments.ssr`, and measure per-template code and the resume cost of `by`. Closed PRs #3353 (`_.o(owner, [...])`) and #3354 showed both halves; on current main, #3354's lazy keys would break the selector's O(1) path and, under a patch, pair rows by position, which is why this runs at resume. Related: `2026-09-29-resume-an-unchanging-only-child-branch-by-its-branch-marker.md` also drops `_`.

Check: the optimized `writes.html` of `for-tag-static-value-with-closure` has `Aa: [_(2), _(3), _(4), _(5)]` followed by four `{ _: _(1) }`, and that of `for-keyed-selector-class` has `f: [{ id: 1, … }, …]` followed by `{ M: 1 }`, `{ M: 2 }`, `{ M: 3 }`.
