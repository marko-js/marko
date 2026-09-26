---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/dom/load.ts › insertLoaded
---

# Complete a lazy tag's count after the renders of the flush that settles its load

`insertLoaded`'s `insert` calls `awaitCounter.c()` right after the loaded content's setup, before the renders that setup queued, so an `<await>` inside lazily loaded content registers after the count reached 0. `dismissPlaceholder` shows the content, `addAwaitCounter` then takes a fresh count and re-shows `@placeholder` on the next frame, and the content comes back once the nested value settles. `loadFailed` has the same order on the reject side: it calls `awaitCounter.c()` before `queueAsyncRender(scope, renderCatch, error)`, so an ancestor `@placeholder` shows the try content before `@catch` replaces it. `_await_promise` already completes through `dom/control-flow.ts` › `completeAwaitCounter`, queued on the try branch with a key past every other render of the flush (after `renderCatch` when a `@catch` handles the rejection); complete the lazy count the same way in both places.

Check: fixture with `child.marko` = `import { resolveAfter } from "../../utils/resolve";` + `<span>child</span><await|v|=resolveAfter("inner", 1)><b>${v}</b></await>` and template `import Child from "./child.marko" with { load: "render" }` + `<let/show=false/><button onClick() { show = true }>show</button><try><@placeholder>loading...</@placeholder><if=show><Child/></if></try>`, `equivalent: false`, steps `[{}, click, wait, wait]`: `render-csr.debug.md` shows `child`, then `loading...`, then `child` with `inner`. For `loadFailed`, the existing fixture lazy-tag-load-error-nested-placeholder's `render-csr.debug.md` removes `loading outer...` one update before `caught: load failed`; with `<p>sibling</p>` added before `<Child/>` in its inner `<try>` (and `skip_ssr: true`), that middle update shows `sibling`.
