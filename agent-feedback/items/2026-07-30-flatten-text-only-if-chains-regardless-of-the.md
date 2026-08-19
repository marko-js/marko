---
type: perf
impact: high
effort: med
site: packages/runtime-tags/src/translator/core/if.ts › flattenTextOnlyConditional
---

# Flatten text-only `<if>` chains regardless of the parent tag type

`flattenTextOnlyConditional` rewrites a text-only `<if>/<else-if>/<else>` chain into one `markoPlaceholder` — no `_if`, no branch scope, no renderer/walker/control-flow subgraph — but bails unless the chain's parent is a native element, on the stated grounds that at a template or component root "the content is a dynamic renderer with different output". That does not hold for output size: the same chain inside a `<div>` compiles to dom 2598/1315 (min/brotli) where at a program root it costs 6003/2758, and a hand-written `${x > 0 ? "a" : "b"}` at that root measures 2597/1313 — within 3 bytes of the flattened form. Every non-native parent loses the same way (custom-tag content body +3543/+1463, `<for>` body +3976/+1653, leaf component whose whole body is the chain +3743/+1571, the most natural real shape), and render perf improves: a direct text write replaces branch allocation plus renderer indirection. It is a threshold effect rather than a per-occurrence saving — one ordinary non-text `<if>` elsewhere on the page collapses the marginal cost to +175/+77 — so the win is that a page or island whose only control flow is text conditionals stops paying the branch floor at all.

Check: build `<let/x=1/><button onClick(){x++}>go</button>` plus `<if=x>a</if><else>b</else>` as two fixtures, the chain once at the template root and once wrapped in a `<div>`, and compare the `dom` totals in their generated `sizes.json`.
