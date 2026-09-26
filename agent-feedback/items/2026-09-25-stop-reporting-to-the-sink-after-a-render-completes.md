---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/html/template.ts › ServerRendered.#read
---

# Stop reporting to the sink after a render completes

`ServerRendered.#read` leaves `boundary.onNext` in place after it calls `onClose`, and the `html/writer.ts` › `Boundary` constructor never removes its `abort` listener from `$global.signal`. Aborting that signal after a successful render therefore re-runs `onNext`, which sees `FlushStatus.aborted` and calls `onAbort`; for `pipe()` that destroys the already-ended stream and emits `error`, and with no listener it throws. The common host pattern `res.on("close", () => ctrl.abort())` hits this on every successful response as an uncaught "This operation was aborted", and a long-lived shared signal keeps every finished render's Boundary and State reachable. Direction: set `boundary.onNext = NOOP` once `#read` completes, and have the root Boundary remove its `$global.signal` listener when it settles.

Check: in a `node --experimental-vm-modules -r ~ts` script inside the repo, load a `<div>hello</div>` template via `createServerRunner` from `packages/runtime-tags/src/__tests__/utils/bundle.ts`, then `template.render({ $global: { signal: ctrl.signal } }).pipe(res)` into a `Writable` with `res.on("close", () => ctrl.abort())`: the body is written in full, then `uncaughtException` reports "This operation was aborted".
