---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/function.ts › resolveFunctionReason
---

# Register functions that reach `<for>` items through a call

`<let/n=0/><for|f| of=[() => n++].concat([])><button onClick=f/></for>` fails SSR with `Unable to serialize "f"`: the function reaches the loop's items through `.concat`, so the loop's readers never reach its expression, and it is serialized without being registered. `of=Object.values({ a() { n++ } })` fails the same way, while `of=[() => n++]` works. Direction: conservatively count a function passed into a call inside `of=` as read by the loop's readers.

Check: SSR-render that template.
