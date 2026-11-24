---
type: bug
impact: low
effort: low
site: packages/runtime-class/test/async-stream/index.test.js › "should catch error in promise catch if `error` listener only set inside mixin"
---

# Drop the AsyncStream test's `then` that always throws

The test chains `out.catch(...).then(() => { throw new Error("Should not get here!") })`. The `then` follows the `catch`, so it runs once the catch handler returns and always throws, leaving an unhandled rejection instead of checking that the stream rejects. Direction: drop the trailing `then`; a stream that resolves never calls `done`, so the test already times out.

Check: `NODE_OPTIONS=--unhandled-rejections=strict pnpm test -- packages/runtime-class/test/async-stream/index.test.js` fails it with `Uncaught Error: Should not get here!` (mocha drops the rejection otherwise).
