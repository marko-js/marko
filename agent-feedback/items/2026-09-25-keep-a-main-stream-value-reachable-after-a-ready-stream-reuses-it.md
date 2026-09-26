---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/html/serializer.ts › writeRef
---

# Keep a main-stream value reachable after a ready stream reuses it

`writeRef` (path branch) and `assignId` (cross-flush branch) set `ref.channel = state.channel` when they reuse a value, so a value the main stream wrote takes the `readyId` of a ready stream that only re-read it. The next main-stream reuse then fails `trackChannel`: debug builds abort the render with `abortUnreachableChannel`'s "shared between independently lazy loaded content" message, which does not describe this case, and optimized builds drop the property. Direction: once main or an ancestor channel has written a value, a ready-stream reuse writes a path without reassigning the reference's `id`, `path`, `pos` or `channel`; add a main → ready stream → main case to `serializer.test.ts`'s channel tests.

Check: in a `node -r ~ts` script inside the repo, with `boundary = { signal: { aborted: false }, state: {}, abort: (e) => console.log(e.message) }`, `shared = { x: 1 }` and one `new Serializer()` from `packages/runtime-tags/src/html/serializer.ts`, call `stringifyScopes([[1, {}, { shared }]], boundary)`, then `stringifyScopes([[2, {}, { shared }]], boundary, { readyId: "a" })`, then `stringifyScopes([[3, {}, { shared }]], boundary)`: the third call logs the "independently lazy loaded content" abort and returns an empty string.
