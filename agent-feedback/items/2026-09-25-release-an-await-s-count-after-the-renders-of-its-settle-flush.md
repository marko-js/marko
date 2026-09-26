---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › _await_promise
---

# Release an `<await>`'s count after the renders of the flush it settles in

`_await_promise`'s resolve render calls `awaitCounter.c()` right after `params`, before the renders `params` queued, so a nested `<await>` in the resolved content registers after the count has reached 0. `dismissPlaceholder` shows the content, `addAwaitCounter` then takes a fresh count and re-shows `@placeholder` on the next frame, and the content comes back once the nested value settles, while SSR keeps the placeholder up for the whole content. Direction: release the count from a render on the try branch keyed after every other render of the settle flush (not from an effect, which `handlePendingTry` would defer onto the held count), so awaits started by resolved content count first, and update catch-reject-nested-in-await's CSR snapshot.

Check: `packages/runtime-tags/src/__tests__/fixtures/catch-reject-nested-in-await/__snapshots__/render-csr.debug.md` shows `changes: 0`, then `loading outer...` again, then `changes: 0` before `caught: ERROR!`; its `render-ssr.debug.md` goes straight from `loading outer...` to `caught: ERROR!`.
