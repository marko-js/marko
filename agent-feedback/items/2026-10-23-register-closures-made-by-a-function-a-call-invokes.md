---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/get-root.ts › getFnRoot
---

# Register closures made by a function a call invokes

`<let/n=0/><for|fn| of=[0].map(() => () => n++)><button onClick=fn/></for>` fails SSR with `Unable to serialize "fn"`: the closure that reaches the loop's items is made by the function `.map` invokes, and `getFnRoot` clears its candidate at that call, so the loop's readers never reach its expression and it ships unregistered. A function the call merely receives as part of a value — `of=[() => n++].concat([])`, `of=Object.values({ a() { n++ } })` — is registered, since only what the call receives as itself is swallowed. What remains is the invoked function's return value, which the call hands straight back to the readers. Direction: an invoked function that can produce a function still holds that closure's reads, because what it returns lands in the browser.

Check: SSR-render that template.
