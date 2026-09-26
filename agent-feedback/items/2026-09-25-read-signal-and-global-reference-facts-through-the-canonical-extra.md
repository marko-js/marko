---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/visitors/referenced-identifier.ts › translate
---

# Read `$signal` and `$global` reference facts through the canonical extra

`finalizeReferences` writes `referencedBindings` only on the canonical extra of merged expressions, but `translate` reads `exprRoot.referencedBindings` directly to place the `$signalReset` statement, and `getSignalGlobalKey` reads `getExprRoot(identifier).node.extra?.referencedBindings` the same way. In an expression merged into a tag extra (`<lifecycle>` attributes, dynamic tag attributes, `<if>` conditions, merged rest attributes), the reset lands in `$setup`, so `$signal` never aborts when the expression re-runs, contrary to the documented "aborted when the expression is invalidated"; and a `$global.flag` read there skips the debug `_global_read` warning for an unserialized key. Direction: read both through `getCanonicalExtra` (or one `getReferencedBindings(extra)` accessor that does), and cover it with a fixture asserting a `<lifecycle onUpdate>` signal aborts on update.

Check: a fixture with `<let/count=0/><lifecycle onMount() {} onUpdate() { const n = count; $signal.onabort = () => console.log("abort", n); }/><script>const n = count; $signal.onabort = () => console.log("script abort", n);</script><button onClick() { count++ }>${count}</button>` and three click steps logs only "script abort" 0, 1, 2 and never "abort"; `pnpm run compile -- -o dom -d` on that template puts the `<lifecycle>` expression's `$signalReset($scope, 0)` in `$setup` and the `<script>`'s `$signalReset($scope, 1)` in `$count`. `pnpm run compile -- -o dom -d` on `<let/y=false/><if=$global.flag && y>hi</if><span>${$global.other && y}</span><button onClick() { y = !y }/>` wraps `other` in `_global_read` but leaves `$scope.$global.flag` bare.
