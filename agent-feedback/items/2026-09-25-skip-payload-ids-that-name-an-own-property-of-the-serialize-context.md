---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/html/serializer.ts › nextId
---

# Skip payload ids that name an own property of the serialize context

`nextId` yields `name` at id 909,069, and payload ids are properties of `_`, which is the `serializeContext` arrow function in `dom/resume.ts`. A function's own `name` is not writable, so `_.name=…` is silently ignored in the sloppy inline script and every later `_.name` read returns the function's name instead of the value. Direction: have `nextId` skip ids that are own properties of a function (`name`; `length` is out of reach).

Check: in a `node --max-old-space-size=8000 -r ~ts` script inside the repo, serialize `value = objs.flatMap((o) => [o, o])` for 909,070 fresh objects via `new Serializer().stringifyScopes([[1, {}, { value }]], { signal: { aborted: false }, state: {}, abort() {} })`: the output contains `_.name=`, and evaluating it with a function as `_` (`(0, eval)(out)(ctx)` with `ctx = (d) => d; ctx._ = {}`) makes the last array entry the string `"ctx"` instead of the object.
