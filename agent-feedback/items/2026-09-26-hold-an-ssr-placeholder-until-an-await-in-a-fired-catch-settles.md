---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/html/writer.ts › tryBoundary
---

# Hold an SSR `@placeholder` until an `<await>` in a fired `@catch` settles

When a `<try>` in the content of a `<try>` with `@placeholder` catches a rejection and its `@catch` content starts an `<await>`, the server swaps the outer `@placeholder` out before that await settles. `tryBoundary`'s `onNext` flushes the discarded body's pending reorder empty, which completes the outer placeholder's reorder, and streams the catch as its own `state.reorder(catchChunk)`, so the catch content's nested reorder is not counted against the enclosing placeholder. The page shows the empty caught region for a flush, while the client runtime, and SSR for an `<await>` nested in resolved content, keep `@placeholder` up until everything settles. Direction: make the fired catch's reorder, with its pending nested reorders, count toward the enclosing placeholder before the discarded body completes it.

Check: `packages/runtime-tags/src/__tests__/fixtures/try-placeholder-await-in-catch/__snapshots__/render-ssr.debug.md` has an update that removes `loading...` and shows nothing before the one showing `caught ERROR!, retried`; its `render-csr.debug.md` goes straight from `loading...` to that content.
