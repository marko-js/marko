---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/references.ts › addReadToExpression
---

# Rewrite a hoisted tag variable read that is the callee of an optional call

A tag variable declared inside an `<if>` and read from outside it is hoisted:
the read becomes `$name_getter($scope)` for a plain call (`focusIt()`), a
guarded call (`if (focusIt) focusIt()`) and an assignment (`const f = focusIt`).
The same read as the callee of an optional call, `focusIt?.()`, is left as the
bare identifier: the getter is still emitted, but the handler references a
`focusIt` that no scope declares, so the click throws `ReferenceError` in the
browser while `mtc` and the compile both pass. The optional call is the
natural spelling for a value that is undefined while the branch is not
rendered, so this is the form people reach for first. The reference walk
should treat an `OptionalCallExpression` callee like a `CallExpression` callee
(or like any other read) when it decides how to translate the identifier.

Check: compile with `pnpm run compile -- -o dom -d a.marko` where `a.marko` is

```marko
<if=input.on>
  <child/focusIt/>
</if>
<button onClick() { focusIt?.(); }>y</button>
```

and `tags/child.marko` is `<input/el><return=(() => el().focus())>`; the emitted
click handler body is `focusIt?.();` with no `$focusIt_getter` read, where the
same file with `focusIt();` emits `$focusIt_getter($scope)()`.
