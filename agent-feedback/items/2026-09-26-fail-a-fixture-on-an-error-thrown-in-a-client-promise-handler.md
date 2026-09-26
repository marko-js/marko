---
type: dx
impact: med
effort: low
site: packages/runtime-tags/src/__tests__/utils/track-mutations.ts › handleRejection
---

# Fail a fixture on an error thrown in a client promise handler

`trackMutations` collects browser errors from the window `error` and `unhandledrejection` events, but jsdom never dispatches `unhandledrejection`, so an error thrown inside a DOM runtime promise callback (an `<await>` settle or reject handler, `dom/load.ts` › `loadFailed`, a lazy chunk's `then`) is dropped and the fixture passes. A `MARKO_DEBUG` assert reached from one of those callbacks is therefore invisible to the suite. Direction: record `process` `unhandledRejection` reasons for the browser context while a fixture step runs (the vm context shares the Node process) and feed them to the same error set, so such a throw fails the step or lands in its error snapshot.

Check: in `dom/load.ts` › `loadFailed`, change `else if (awaitCounter.i) awaitCounter.c();` to `else awaitCounter.c();` and run `pnpm run test:serial -- --grep "runtime-tags/translator lazy-tag-load-error-after-catch debug csr"`: the step passes although `c()` throws "An await counter completed more counts than it took." (log before and after the call to see the second line never runs).
