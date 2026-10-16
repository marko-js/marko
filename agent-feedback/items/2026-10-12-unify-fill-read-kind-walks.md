---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/patch/refresh.ts › computeFillReadKind
---

# Unify the section walk behind a binding's fill read kind

`computeFillReadKind` still repeats per read work that depends only on sections. Each binding's kind is memoized per solve pass and per translate (`getPatchFill`), and caller-owned structure and statefulness are per-stage section memos (`getCallerOwnedStructure`, `inStatefulBranch`). But for each read it re-merges the sources of every binding the read references (`getSourcesForRef(getReferencedBindings(read))`), and walks the read's section up to the binding's section (stateful branch, boundary content, nearest withholdable content, call sections); reads in the same section repeat that walk.

Derive those per-section facts once instead: memoize, per section, the nearest ancestor that is a stateful branch or boundary content and its nearest withholdable content, so each read becomes lookups, and memoize a read's merged sources once references are final. Check that `pnpm test` output stays identical, since the result feeds every patch fill decision.
