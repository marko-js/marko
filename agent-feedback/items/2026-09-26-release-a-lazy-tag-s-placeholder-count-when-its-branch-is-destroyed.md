---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/load.ts › _load_template
---

# Release a lazy tag's placeholder count when its branch is destroyed

`_load_template` and `_load_setup` take a count on the nearest `<try>` `@placeholder` (`addAwaitCounter`) and release it only from `insertLoaded`, which runs as a render queued on the lazy branch. Destroying that branch before its module loads makes `dom/queue.ts` › `runRender` skip the render, so the count is never released and the `@placeholder` stays up while the rest of the `<try>` content stays detached. Direction: release the count from `$signal(branch, …).onabort` through a render queued on the try branch, the way `dom/control-flow.ts` › `_await_promise` releases an `<await>`'s count, and make a later `insertLoaded` or `loadFailed` a no-op for it, which replaces `loadFailed`'s check for a count `renderCatch` already zeroed.

Check: fixture with `child.marko` = `<span>${input.value}</span>` and template `import Child from "./child.marko" with { load: "render" }` + `<let/show=true/><button onClick() { show = false }>hide</button><try><@placeholder>loading</@placeholder><if=show><Child value=1/></if><div>settled</div></try>`, `equivalent: false`, steps `[{}, flushRAF, click, wait]`: `render-csr.debug.md` ends on `loading` instead of `<div>settled</div>`.
