---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/html/serializer.ts › isDedupedMember
---

# Claim an eager container id only for a member first written there

A container no access path reaches back into (a `Map`/`Set`/generator backing array, a registered factory's locals, `Intl` options) binds an id up front when `isDedupedMember` reports a reusable member, but nothing reads that id back in two cases. `isDedupedMember` is true for every function, symbol and non-scope object, yet a registered function with no scope, a well-known function, object or symbol (`Math`, `Symbol.iterator`) and a `Symbol.for` symbol never create a `Reference`. And `writeMap`, `writeSet` and `writeGenerator` claim the id even when every reusable member was already written elsewhere, a case `newArgReference` skips by checking `state.refs`/`state.strs`. Each wasted id costs about 4-5 bytes; a shared predicate that also excludes values written without a `Reference` would drop both.

Check: in a `node -r ~ts` script inside the repo, with `shared = { x: 1 }`, `new Serializer().stringifyScopes([[1, {}, { a: shared, s: new Set([shared]), m: new Map([[1, shared]]) }]], boundary)` returns `_=>[1,{a:_.b={x:1},s:new Set(_.a=[_.b]),m:new Map(_.c=[[1,_.b]])}]`, and `stringifyScopes([[3, {}, { s: new Set([register("plain", function plain() {}), Symbol.iterator, Math]) }]], boundary)` returns `_=>[3,{s:new Set(_.a=[_._.plain,Symbol.iterator,Math])}]`: no `_.a` or `_.c` is ever read.
