---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › getSignal
---

# Inline single-consumer derived value signals, not only intersection-collapsed members

`signal.inline` is set only inside `getSignal`'s `collapsedIntersectionSource` branch (gated on `member.reads.size === 1`), so a standalone derived value with a single consumer still emits a named module function plus a one-shot call from `getSignalFn`. `<for|item| of=input.items><li>${item.name}</li></for>` compiles (`-o dom`, optimize) to `$for_content__item_name` referenced exactly once by `$for_content__$params`; a single-use `<const>` gives the same shape, and minifiers do not cross-inline them (rolldown `minifySync` keeps both arrows), so it is shipped size on every `<for>`. Gate inlining on "one consumer call-site" (broader than `reads.size === 1`), keeping a standalone function when the value has >1 consumer, is persisted (`forcePersist`/cross-scope), or has dynamic subscribers. Priced 2026-07-30 by holding everything else constant across 33 components: **21.3 min / 5.0 brotli per single-consumer derived binding** (4780/1724 → 5463/1883), about a third of the whole per-component client-JS cost of a simple input-driven component, and 16.0/4.4 per single-use `<const>` against writing the expression inline, with byte-identical SSR either way. Unlike most repetitive-codegen shrinks this one actually compresses, because it removes a function plus a call rather than repeated text — replacing the ubiquitous per-binding `($scope, v) => _text($scope.a, v)` with a `_text_signal("a")` helper, by contrast, measures -258 min but **+4 brotli**.

Check: recompile that `<for>` and confirm the value body lands inside `$for_content__$params`.
