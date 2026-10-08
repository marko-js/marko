---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › patchFillsClientReads
---

# Ship a `$global`-mixed root param only where the client owns it, even through a filled derivation

A root param read in a join with a keyed `$global` read gets its own sources as a slot reason (`addIntersectionMemberReason`), so the page ships it for the `$global` join. `writeBinding` gates it on `_unfilled_if` (client-owned groups) only when `patchFillsClientReads` holds. When the param derives a patch fill read in a creatable branch, `patchFillsClientReads` recurses into the fill's own readers and fails, so the page falls back to `_source_if` and ships the param wherever its group is fed, including on every server-owned page render where the fill already carries the value. Stopping the recursion at a filled derivation (taking its fill conditions as upstreams) was tried and breaks fixtures whose fills are functions or captured values (`patch-branch-client-fn-fill`, `patch-grand-server-fn`), so the rule needs to tell those apart.

Check: `patch-global-derived-fill`'s `html.bundle.js` writes `e: _source_if($scope0_reason, 0) && input.name` on its page render, though `greeting` is filled (`_filled_guard(...) && _patch_value(..., greeting)`) and nothing on the client reads `input.name`.
