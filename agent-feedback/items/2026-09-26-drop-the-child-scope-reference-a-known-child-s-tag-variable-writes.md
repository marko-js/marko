---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › knownTagAnalyze
---

# Drop the child scope reference a known child's tag variable writes

`knownTagAnalyze` adds the returned value's sources (`varExpr`) to the child scope binding's serialize reason, so the parent writes `"#childScope/N": _existing_scope(id)` to make the child's scope flush with the passive `#TagVariable` that html `_var` writes. When the variable is that binding's only reason, the parent reads `#childScope/N` only in `$setup` (`_var` and the child setup call), which resume never runs, so each instance sends a scope reference nothing reads. Direction: for a non-mutating `varExpr`, flush the child scope under the same guard without making it a parent scope property (an assigned variable still needs the reference for `_var_change`).

Check: `custom-tag-var` fixture's `writes.debug.html` writes `"#childScope/0": _(2)` while its `dom.bundle.debug.js` reads `$scope["#childScope/0"]` only inside `$setup`.
