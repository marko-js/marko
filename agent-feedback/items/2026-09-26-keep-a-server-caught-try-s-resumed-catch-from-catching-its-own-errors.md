---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/writer.ts › _try
---

# Keep a server-caught `<try>`'s resumed `@catch` from catching its own errors

When the body throws synchronously on the server, `tryBoundary` renders the `@catch` content in the range of the try's branch (`branchId`) and returns `false`, so `_try` still calls `writeTryRenderers(branchId, …)` and writes the try's end mark. On resume that branch carries `CatchContent`, and `createVisitBranches` sets `AccessorProp.BranchAccessor` on it as on every multi-node branch, so the client treats the caught branch as a live try: `renderCatch` stops at it and re-renders the same `@catch` for an error its content throws, and a later run of DOM `_try` stamps `CatchContent`/`PlaceholderContent` onto it. CSR sends that error to the enclosing `<try>`. Direction: skip `writeTryRenderers` after a sync catch, and mark the resumed branch so DOM `_try` can tell it from a live try (its guard reads `BranchAccessor`, which the walker sets on both).

Check: fixture with template `<try><@catch|outer|>outer caught ${outer.message}</@catch><try><@catch|err|><let/n=0/><button onClick() { n++ }>${err.message} ${n ? (() => { throw new Error("from catch") })() : n}</button></@catch>${(() => { throw new Error("body") })()}</try></try>`, `equivalent: false`, steps `[{}, click]`: `render-csr.debug.md` ends on `outer caught from catch`, while `render-ssr.debug.md` ends on `<button>from catch 0</button>` and `writes.debug.html` writes `#CatchContent` on the inner try's branch (scope 3).
