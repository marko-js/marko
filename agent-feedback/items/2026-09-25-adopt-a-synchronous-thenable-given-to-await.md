---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/dom/control-flow.ts › _await_promise
---

# Adopt a synchronous thenable given to `<await>`

`common/helpers.ts` › `isPromise` accepts any object with a `then` function, and both `<await>` runtimes call that `then` directly. On the client, `_await_promise` reads `thisPromise` (the result of `promise.then(…)`) inside the callback to tell whether its value is still the latest, so a thenable that calls back synchronously runs it before `thisPromise` is initialized and the client renders `@catch` with a ReferenceError (or throws with no `@catch`). On the server, `html/writer.ts` › `_await` inside a `<try>` writes the value but the stream never ends. Direction: adopt foreign thenables with `Promise.resolve(promise)` before calling `then` in both runtimes, or, if the bytes matter, a MARKO_DEBUG error saying `<await>` takes a Promise or a Promise/A+ thenable.

Check: fixture with template `<let/n=0/><button#inc onClick() { n++ }>inc</button><try><@catch|e|>caught ${e.message}</@catch><await|v|=n ? { then(resolve) { resolve(n) } } : 0>value ${v}</await></try>`, steps `[{}, inc]`: the update shows `caught Cannot access 'thisPromise' before initialization` instead of `value 1`. For the server, render `<try><@catch|e|>caught ${e.message}</@catch><await|v|={ then(resolve) { resolve(1) } }>value ${v}</await></try><div>after</div>` with a `for await` over `template.render({})` (loaded through `createServerRunner` in `packages/runtime-tags/src/__tests__/utils/bundle.ts`, run with `node --experimental-vm-modules -r ~ts`): it yields a chunk with `value 1` and `<div>after</div>` and never ends, while `Promise.resolve(1)` in place of the thenable ends the stream.
