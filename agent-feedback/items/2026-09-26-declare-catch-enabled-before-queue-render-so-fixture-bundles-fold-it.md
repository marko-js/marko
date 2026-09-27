---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/dom/queue.ts › catchEnabled
---

# Declare `catchEnabled` before `queueRender` so fixture bundles fold it

`let catchEnabled` is declared below `queueRender`, its first use. The fixture bundles keep source order, so their minifier cannot assume the latch is still `undefined` when `queueRender` runs, and every fixture without `<try>`, `<await>`, or lazy loading keeps `catchEnabled && render[PendingRenderProp.Pending]` and the latch itself. Declaring it with the other module state at the top of `queue.ts`, next to `pendingRenders`, lets the minifier fold it: 10 min / 7 brotli per fixture (`basic-counter` goes from 2504/1286 to 2494/1279).

Check: move `let catchEnabled: undefined | 1;` above `queueRender`, run `pnpm run test:update`, and see every fixture `sizes.json` without catch shrink; then run `pnpm run build && pnpm run build:sizes` to confirm the `.sizes` floor does not grow.
