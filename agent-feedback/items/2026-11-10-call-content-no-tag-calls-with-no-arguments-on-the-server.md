---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/html/writer.ts › withContext
---

# Call content no tag calls with no arguments on the server's resumable path

Content that no tag calls (a native tag's `content`, a `<try>` `<@placeholder>`) gets no arguments, and the client runs its params with none (`dom/renderer.ts` › `createAndSetupBranch`). The server does so only when the content does not resume: `html/writer.ts` › `_attr_content` calls `withBranchId(branchId, content)` and `Chunk` renders a placeholder through `withBranchId`, and `withContext` always forwards `cb(cbValue, cbValue2)`, so the content runs with two `undefined` arguments. Only a rest param or `arguments` sees it (`|...args|` reads a length of 2 on the server, 0 on the client and on the non-resumed server path). Call such content with no arguments without allocating a closure per render on this hot path, for example by giving `withContext` an arity or a zero-argument variant for content.

Check: a `fixtures` fixture `<let/on=true><define/Count|...args|><b>${args.length}</b></define><div content=(on && Count)/><button onClick() { on = !on }/>` with `equivalent: false` and steps `[{}, click, click]` renders `2` in its SSR snapshot and `0` in its CSR one.
