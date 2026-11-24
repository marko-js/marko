---
type: dx
impact: med
effort: low
site: packages/runtime-class/test/__util__/jsdom-require/index.js › createBrowser
---

# Report unhandled rejections in runtime-class browser tests

`browser.act` listens for the window's `unhandledrejection`, which jsdom never dispatches, so a rejection a component leaves unhandled never reaches its errors. Outside the runtime-tags fixture tracker nothing else reports one either: mocha's `Runner#unhandled` re-emits it to the process's other listeners and, with none, drops it, which is what Node's default `--unhandled-rejections=throw` defers to. Direction: collect `process.on("unhandledRejection")` for the span of `act`, as `packages/runtime-tags/src/__tests__/utils/track-mutations.ts` › `createMutationTracker` does for a fixture run, and drop the window listener.

Check: `node -e` a `JSDOM` with `runScripts: "dangerously"`, add a window `unhandledrejection` listener and a `process.on("unhandledRejection")` one, then `window.eval("Promise.reject(new Error('x'))")`: only the process listener fires.
