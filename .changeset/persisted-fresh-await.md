---
"@marko/runtime-tags": minor
---

Fresh subtrees created by persisted updates now support `<await>`/`<try>`
boundaries. Await promise computes over request-derived bodies are skipped
while a patch applies (the expression may live behind a `server import`);
the await's branch is created detached as usual, and the awaited body's own
frame is the resolution — the update merge attaches it at its anchor
(`attachAwaitBranch`, shared with promise resolution) and fills it from the
patch. Boundary merges flush queued structural renders and retry once when
a same-frame fresh creation hasn't materialized the live boundary yet.
This makes server-first pages with awaited sections viable cross-route
swap targets.
