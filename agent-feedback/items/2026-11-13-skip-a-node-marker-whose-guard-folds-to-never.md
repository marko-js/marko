---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/write-guard.ts › getMarkerGuard
---

# Skip a node marker whose guard folds to never

A node whose slot has a reason but whose guard folds to `0` (a `<define>` body param every call passes unwritten) still emits its marker call with that `0`: `_el_mark(id, accessor, 0)`, or `_text_mark(id, accessor, value, 0)` where `_escape(value)` would do. Each costs server code per template and a runtime call per render that writes nothing. Let `getMarkerGuard` callers tell a never-written marker from a conditional one (`getWriteBit(...) === 0`) and emit no marker call, or the plain value write, there.

Check: `define-tag-render-args`' `html.bundle.js` writes `_text_mark($scope1_id, "b", b, 0)`, and `custom-tag-var-return-before-sibling-setup`'s writes `_el_mark($scope1_id, "a", 0)`.
