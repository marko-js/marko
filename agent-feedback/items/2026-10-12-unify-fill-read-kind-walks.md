---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/patch/refresh.ts › computeFillReadKind
---

# Unify the section walks behind a binding's fill read kind

`computeFillReadKind` repeats work per read that depends only on sections. For each read it re-merges the sources of every binding the read references (`getSourcesForRef(getReferencedBindings(read))`, the merge `getSourcesForExpr` also repeats on every call). It then walks the read's section up to the binding's section (stateful branch, boundary content, nearest withholdable content, call sections), and separately walks it again to the page root through `getParamRebuildChain`, which allocates the chain and recomputes `getParamRebuildSources` for every section. Reads in the same section repeat both walks, and at analyze nothing is memoized at all.

Derive the per-section facts once instead: memoize, per section, the nearest ancestor that is a stateful branch or boundary content, its nearest withholdable content and its param rebuild chain, so each read becomes lookups. Fold the two upward walks into that one pass, and memoize a read's merged sources once references are final. Check that `pnpm test` output stays identical, since the result feeds every patch fill decision.
