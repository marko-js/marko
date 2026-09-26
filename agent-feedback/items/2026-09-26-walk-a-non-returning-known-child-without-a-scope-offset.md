---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › knownTagAnalyze
---

# Walk a non-returning known child without a scope offset

A tag variable on a known child (custom tag or `<define>` call) whose content has no `<return>` is set to `undefined` in the parent's setup by `knownTagTranslateDOM`, yet analyze still creates its `#scopeOffset` binding and `structure.child` still records `hasVar`, so the walk uses `BeginChildWithVar` and every instance reserves a scope id and a slot nothing reads. Direction: skip both when `contentSection.returnValueExpr` is final and absent at analyze: a child in another file or an earlier `<define>` is fully analyzed, but a template that renders itself may still reach its `<return>` later in its own body.

Check: `tag-var-without-return` fixture's `dom.bundle.debug.js` walks `<child/x/>` and `<Foo/z/>` with `0` (`BeginChildWithVar`) before each child's walks, and the template reserves `#scopeOffset` accessors for both.
