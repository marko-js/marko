---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/translator/util/evaluate.ts › getKind
---

# Add a value kind for a fresh reference so an all-constant literal can be one module value and a fresh one skips its compare

`KIND_OBJECT` and `KIND_FUNCTION` are set for what each evaluation creates anew (an object, array, function or class literal, a `new`, a regex), and a read of a `<const>` keeps the bit though each read is the same object, so no kind tells a fresh reference from a stable one. An all-constant `<const/opts={ a: 1, b: [1, 2] }/>` is therefore rebuilt per instance (the DOM `$setup` passes a new literal to `_const("opts")`; the server builds one per render and writes it into the scope where client code reads it), and `dom/signals.ts` › `_const` compares a literal such as `{ x: input.x }` with `!==`, which a fresh value always fails. A "fresh per evaluation" bit would let the translator set a fresh value with no compare, and hoist an all-constant literal to one module value read in place. The bit is cheap; the hoist also needs proof that nothing writes into the value, which `Binding.assignedProperties` gives only for assignments through the binding, and that nothing tells one instance's value from another's (an `===`, a `Map` or `Set` key), since one module value is the same object in every instance.

Check: `pnpm run compile -- -o dom -d` on `<const/opts={ a: 1, b: [1, 2] }/><const/pos={ x: input.x }/><for|item| of=input.items><panel opts=opts pos=pos/></for>`, with `tags/panel.marko` `<let/n=0/><button onClick() { n++ }>${input.opts.a} ${input.pos.x} ${n}</button>`, emits `$opts($scope, { a: 1, b: [1, 2] })` in `$setup` and `$pos($scope, { x: input_x })` into `_const("pos", …)`; `-o html -d` writes `_scope($scope0_id, { opts, pos }, …)`.
