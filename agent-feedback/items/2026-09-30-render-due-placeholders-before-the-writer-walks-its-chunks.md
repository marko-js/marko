---
type: cleanup
impact: med
effort: med
site: packages/runtime-tags/src/html/writer.ts › Chunk.flushPlaceholder
---

# Render due placeholders before the writer walks its chunks

`flushPlaceholder` renders `@placeholder` content in the middle of `consume` and `flushReorder`, the only user code that runs inside the writer's walk. A placeholder that throws fires a `@catch` whose cut rewrites the chunk list and reorder queue while they are being walked, which is why the writer tracks stranded reorders (`State.stranded`, re-running the reorder loop), treats chunks requeued in the current pass as streamed until the loop reaches them, and why several recent stream-loss and crash bugs sat on this path. Direction: split a flush into a pass that renders every placeholder due in the range the walk will cover (the in-order range to the first pending chunk and each queued reorder's chain) and applies any cut it fires, then a walk that only moves data. Nothing async runs between the two, so each placeholder decision matches today's and output should stay byte-identical; the cost is one extra pass over those chunks.

Check: the writer's placeholder-throw fixtures (`try-catch-placeholder-throw-*`, `try-catch-nested-placeholder-throw-before-await`) keep their snapshots with the stranded tracking removed.
