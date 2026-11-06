---
"@marko/runtime-tags": patch
---

A page that gets its `<for>` items through a call — `of=[() => count++].concat([])`, `of=Object.values({ counted() { count++ } })` — no longer fails with `Unable to serialize "fn"`. A call only swallows the function it invokes, so a closure inside a value the call receives keeps its own reads and registers as the loop's item instead of shipping to the browser on its own.
