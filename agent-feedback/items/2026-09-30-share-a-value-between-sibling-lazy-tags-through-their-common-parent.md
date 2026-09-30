---
type: bug
impact: high
effort: high
site: packages/runtime-tags/src/html/serializer.ts › writeReferenceOr
---

# Share a value between sibling lazy tags through their common parent

A value is owned by the ready channel that first serializes it, and a channel can only read values from itself or its ancestors (`trackChannel`). When two independently lazy loaded tags are passed the same object and nothing eager in their common parent reads it, the first tag's channel serializes it and the second can't reach it: debug renders abort with "Unable to serialize a value shared between independently lazy loaded content", and optimized renders silently omit it from the second tag's scope (`writeReferenceOr` returns false), so that tag's handler reads `undefined` after resume. Passing one object to two lazy siblings is an ordinary pattern, and the error's advice (serialize it from non-lazy content or a common parent) is not something the author controls. Direction: when a channel references a value it cannot reach, write it in the nearest common ancestor channel of the two (the main stream here) instead of failing, which needs the owning write to be deferrable or the value to be written by the ancestor up front when more than one lazy child receives it; weigh a per-channel copy (losing identity between the siblings) as the fallback.

Check: a fixture with `a.marko` = `<let/count=0/>` `<button.a onClick() { count += Object.keys(input.value).length }>a:${count}</button>`, `b.marko` the same with `.b`, `template.marko` = `import A from "./a.marko" with { load: "render" }`, `import B from "./b.marko" with { load: "render" }`, `<const/shared={ n: 1 }/>`, `<A value=shared/>`, `<B value=shared/>`, and `test.ts` with `equivalent: false`, steps `[{}, wait]`: the debug SSR test fails with the error above, and the optimized `writes.html` sends `M._.b._b = [_ => [3, { f: 0 }], "b0 3"]` with no value for B's input.
