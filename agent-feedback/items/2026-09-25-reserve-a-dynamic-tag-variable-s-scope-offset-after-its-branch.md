---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/walker.ts › walkInternal
---

# Reserve a dynamic tag variable's scope offset after its branch is created

An Intersection that reads a tag variable is lowered to `_or(id, fn, n, "#scopeOffset/N")`, keying its render by the `#scopeOffset` id so it sorts after the child's renders. The static `BeginChildWithVar` path and html `_var` reserve that id after the child scope, but `walkInternal` reserves it for `DynamicTagWithVar` at walk time with `skipScope()`, before `_dynamic_tag` creates the child Branch, so on the client the `_or` sorts before every render of a dynamic child. When one update changes another Intersection member and makes the child `_return` a new value, the `_or` runs first with the stale variable, and the child's later `_return` reaches `queueRender` on a slot whose `Gen === runId` and is dropped. Direction: reserve the offset when `_dynamic_tag` creates a branch (note an existing render slot keeps the key it was created with), and add a MARKO_DEBUG error when `queueRender` re-queues a slot that already ran in this run.

Check: fixture with `tags/child.marko` = `<let/n=0/>` `<return={ n, set(value) { n = value } }/>` `<span>${n}</span>` and `template.marko` = `import Child from "./tags/child.marko";` `<let/a=0/>` `<let/Tag=Child/>` `<${Tag}/v/>` `<button onClick() { a++; v.set(5) }>${a + ":" + v.n}</button>`, `test.ts` with `equivalent: false` and steps `[{}, (d) => d.querySelector("button")!.click()]`: `render-csr.debug.md` shows `1:0` and `render-ssr.debug.md` shows `1:5`; replacing `<${Tag}/v/>` with a static `<child/v/>` shows `1:5` in both.
