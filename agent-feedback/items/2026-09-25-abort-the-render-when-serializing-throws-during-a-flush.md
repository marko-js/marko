---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/html/writer.ts › flushSerializer
---

# Abort the render when serializing throws during a flush

`html/serializer.ts` › `Serializer.stringifyScopes` has only a `finally`, and the `writeObjectProps` comment says a getter's throw "escapes as is", relying on it to reach the caller. But `Boundary.flush` (and `flushSerializer` under it) runs from `ServerRendered.#read`'s `onNext` inside promise callbacks (`_await`'s `then`, `endAsync`) and `queueTick`, so a throw from a getter, generator, `Symbol.iterator` or Proxy trap reached while serializing `<await>` content becomes an unhandled rejection. The boundary is never aborted, so the iterator, promise, `pipe()` and `toReadable()` consumers all wait forever. Direction: catch around the serialize step in `flushSerializer` (and the consume/`flushHTML` step) and `abort(err)` the boundary once with the original error, keeping the original error so its stack still points at the getter.

Check: in a `node --experimental-vm-modules -r ~ts` script inside the repo, load via `createServerRunner` (`packages/runtime-tags/src/__tests__/utils/bundle.ts`) the template `<await|v|=new Promise((r) => setTimeout(r, 10, 1))><const/obj={ get bad() { throw new Error("boom from getter"); } }/><button onClick() { console.log(obj) }>${v}</button></await>` and `for await` over `template.render({})`: after the first chunk, `unhandledRejection` reports "boom from getter" and the loop never ends or throws.
