---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › _await_promise
---

# Release an `<await>`'s placeholder count when its branch is destroyed

A pending `<await>` holds its `<try>`'s `AwaitCounter` and releases it (`awaitCounter.c()`) only through the renders its settle queues, and `dom/scope.ts` › `destroyBranch` never touches the count. So destroying the content that holds the await leaves `@placeholder` up and the try's content detached for good, both when the promise never settles and when it settles in the same flush that destroys the branch (`dom/queue.ts` › `runRender` then skips the queued render). try-placeholder-await-branch-removed covers only a promise that settles after the destroying flush. Direction: release the count when the await's content is destroyed, after that flush's renders so an `<if>`/`<else>` swapping one pending await for another does not flicker, and make the later settle a no-op for the count.

Check: fixture with template `<let/tab=0/><button#next onClick() { tab++ }>next</button><try><@placeholder>LOADING</@placeholder><if=tab < 2><await|v|=tab === 1 ? new Promise(() => {}) : "ready">${v}</await></if><else>tab 2</else></try>`, steps `[{}, next, wait, next, wait]`: `render.md` ends on `LOADING` instead of `tab 2`. A second fixture, `import { resolveAfter } from "../../utils/resolve";` + `<let/show=true/><let/p=null/><button#start onClick() { p = resolveAfter("loaded", 1) }>start</button><script>p && p.then(() => { show = false })</script><try><@placeholder>LOADING</@placeholder><if=show><await|v|=p || "idle">${v}</await></if><div>settled</div></try>`, steps `[{}, clickStart, wait, wait]`, also ends on `LOADING` instead of `settled`. The existing fixtures catch-reject-sibling-pending-await and catch-reject-nested-catch-pending-await pin this: their `render-csr.debug.md` ends on `loading outer...` while `render-ssr.debug.md` shows `caught: ERROR!`.
