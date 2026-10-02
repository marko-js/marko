---
type: perf
impact: med
effort: low
site: packages/runtime-tags/src/translator/core/let.ts › analyze
---

# Mark a `<let>` non-nullable when every write is

A `<let>` binding keeps the default `nullable: true`, so every property read of it in the DOM output (`$scope.obj?.a` in its member forwards) and in serialized HTML values carries an optional chain, even when its value can never be nullish. In the fixture DOM snapshots, 100 of the 111 `$scope.x?.` chains are on `<let>` values. In the `<let>` analysis, derive the fact from its writes, without a new field: it is non-nullable when `evaluate` finds its `value=` non-nullable (re-read for a controllable `<let>`) and `isNullableExpr` finds every assignment and update in its Babel binding's `constantViolations` non-nullable. A destructuring write, a `for…of` target, or a `:=` change handler (`x = _new_x`) counts as nullable.

Check: `pnpm run compile -- -o dom -d` on `<let/obj={ a: 1 }/><div>${obj.a}</div><button onClick() { obj = { a: obj.a + 1 } }/>` emits `$scope.obj?.a`.
