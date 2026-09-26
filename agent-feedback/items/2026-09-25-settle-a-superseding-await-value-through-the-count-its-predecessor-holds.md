---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › _await_promise
---

# Settle a superseding `<await>` value through the count its predecessor holds

`_await_promise` re-derives the counter a value settles through with `findBranchWithKey(scope, AccessorProp.PlaceholderContent)`, while `_try` rewrites `PlaceholderContent` on every input change. When a conditional `@placeholder` goes away while a value is pending, the next value takes a fresh counter on the await branch that was never incremented (a value is already pending), its settle drives that counter to -1, and the try's own count is never released: `LOADING` stays and the content never returns. If the placeholder goes away before `addAwaitCounter`'s frame runs, the frame calls `createAndSetupBranch` with an `undefined` renderer and throws. Direction: store the counter a pending value took and settle through it, have the frame use the renderer present when the count was taken (or skip when there is none), and add a MARKO_DEBUG assert that `i` never goes negative.

Check: fixture with template `import { resolveAfter } from "../../utils/resolve";` + `<let/n=0/><button#inc onClick() { n++ }>inc</button><try><if=n !== 2><@placeholder>LOADING</@placeholder></if><await|v|=n ? resolveAfter(n) : 0>value ${v}</await></try>`, steps `[{}, inc, flushRAF, inc, wait, wait]`: `render.md` ends on `LOADING`, never `value 2`. With steps `[{}, inc, inc, wait]` the test fails with `TypeError: Cannot read properties of undefined (reading 'owner')` from `createBranch`.
