---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/catch.feat.ts › handlePendingTry
---

# Defer a `<try>` body's effects while its content is detached, not only in marked flushes

The catch.feat effects wrapper checks for a pending try only for effect arrays in `placeholderShown`, which `_await_promise` and `addAwaitCounter` mark only in flushes that start or settle an await. A flush that just updates a try-body `<script>`'s input while a sibling `<await>` is pending is unmarked, so the script runs against the detached DOM behind `@placeholder` and does not run again when the content returns. Direction: decide deferral from the effect's branch chain (an ancestor branch with a nonzero `AwaitCounter`), which lets `placeholderShown` and its `// TODO: check if still needed` mark in `_await_promise`'s resolve render go.

Check: fixture with template `import { resolveAfter } from "../../utils/resolve";` + `<let/n=0/><let/m=0/><button#load onClick() { m++ }>load</button><button#inc onClick() { n++ }>inc</button><try><@placeholder>LOADING</@placeholder><div/el>n ${n}</div><script>console.log("script n=" + n + " connected=" + el().isConnected)</script><await|v|=m ? resolveAfter(m) : 0>value ${v}</await></try>`, steps `[{}, load, flushRAF, inc, wait]`: `render.md` logs `script n=1 connected=false` in the `inc` update and nothing when `value 1` shows.
