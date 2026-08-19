---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/known-tag.ts › knownTagTranslateHTML
---

# Collapse an all-same `_set_serialize_reason` group object into a bare guard or bitmask

`knownTagTranslateHTML` falls back to an object literal `{0: g0, 1: g1, …}` whenever any group guard is a runtime expression, even when every group shares the same expression, and that literal is allocated on every render of the call site — one per row inside a `<for>`. Since `_serialize_if` treats `1` as "all groups" and a number as a bit-per-group mask, a shared 1|0 guard can be passed bare when `hasSkippedReasons` is false, or as `<bitmask> * guard` when groups were skipped. Gate it on the shared expression being normalized to 1|0 (a `_serialize_guard` call, an `||` chain of them, or a numeric literal), because `buildGuardExpr` can also hand back a raw `$scopeN_reason` whose value is itself a mask or object.

Check: `fixtures/at-tag-inside-if-tag/__snapshots__/html.bundle.js` emits `_set_serialize_reason({0: $sg__input_x, 1: $sg__input_x, 2: $sg__input_x})`; across the committed html.bundle.js corpus 17 of 137 calls use the object form and 14 have identical values in every slot.
