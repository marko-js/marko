---
type: bug
impact: med
effort: med
site: packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js › flushScripts
---

# Hold a Tags page's reorder effects while in-order content streams, through the compat flush too

On a Tags page that renders a Class child, `htmlCompat.onFlush` runs `flushScripts` before each `Chunk.flushHTML`, and its `htmlCompat.flushScript` flushes a compat chunk (a Class child's Tags chunk, or a fresh one for class init code) whose `async` is always false. That flush takes the page's queued reorders out of `state.writeReorders`, so `Chunk.flushScript` pushes their effects straight away (`_.push(...)` in the reorder script) instead of holding them on the page chunk the way the page's own flush does while in-order content is pending (`this.async`: "Content reordered in while in-order content still streams waits with the effects that content holds"). A reordered `@catch` then runs its effects before the in-order content after it has streamed, and the client state and the later server HTML disagree. Direction: flush the page's reorders with the async state of the page chunk being flushed (for example leave them to that chunk's own `flushScript`, or have the compat flush hold reorder effects when the flushing chunk is async), not with the compat chunk's.

Check: a `// use tags` page with `<let/count=0/>`, then `<try><@catch><script>count++</script></@catch><await|v|=rejectAfter(new Error("x"), 1)/></try>`, then `<await|v|=resolveAfter("v", 1)><class-wrap/></await>` (a `class {}` component rendering a Tags child), then `<await|v|=resolveAfter("slow", 3)><div id="slow">${count}</div></await>`. In a `fixtures-interop` fixture with `steps: [{}, wait]`, the final SSR render shows `#slow` as `0`. Replace `<class-wrap/>` with a plain element and it shows `1`.
