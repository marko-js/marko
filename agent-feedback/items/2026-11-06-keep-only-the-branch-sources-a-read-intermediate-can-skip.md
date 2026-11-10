---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/solve-reasons.ts › withoutOwnSources
---

# Keep only the branch sources a read intermediate can skip

`withoutOwnSources` keeps every dropped branch source when `hasReadIntermediate` finds a read binding between any one of them and the closure. A source with no read binding between it and the closure still recomputes the closure first, so a param that only reaches the closure directly widens the closure's write guard for nothing. Checking each dropped source on its own keeps only the ones a dirty check can skip.

Check: `pnpm run compile -- -o html -d` on a `child.marko` of `static function open(a, b) { return a && b; }` and ``<const/size=input.a.length/><script>console.log(size)</script><const/label=`${size} ${input.b}`/><if=open(input.a, input.b)><span>${label}</span></if>`` writes `label` under the `input.a, input.b` group; expected `input.a` alone, since `input.b` reaches `label` with no read binding between.
