---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/referenced-identifier.ts › analyze
---

# Skip the `AbortController` when a section only uses `$signal` for cleanup

Naming `$signal` at all compiles to `$signal($scope, id)`, the last DOM-side `AbortController` allocation, and teardown runs `ctrl.abort()` — a real DOM event dispatch that measured ~21% of profiled self time when closure subscriptions used this path. Almost every use is elidable: recursively over `packages/runtime-tags/src/__tests__/fixtures`, `.onabort` dominates, and the one reference that escapes is `packages/runtime-tags/src/__tests__/mounted-template/lifecycle.marko` (`window.signal = $signal`), which must keep a real controller. `analyze` already allocates the per-expression `abortId`, so classify the parent there: `onabort` as an assignment LHS or `addEventListener` with a literal `"abort"` is cleanup-only, `aborted` needs only a boolean, anything else keeps a controller. When every reference for an id is cleanup-only, store the callback in the slot `AccessorProp.AbortControllers` already uses and have `$signalReset` (`packages/runtime-tags/src/dom/abort-signal.ts`) invoke it instead of aborting — still calling `trackCleanup(scope)`, or the callback is never enrolled with its branch and never fires.

Check: `pnpm run compile -o dom -d` on `<script>$signal.onabort = () => {}</script>` emits `_$signal($scope, 0).onabort = …`.
