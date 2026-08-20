---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/html/patch.ts › writeBranch/writeLoop
---

Snapshot-live boundaries now elide their pairing construct payload
(`isSnapshotLiveBoundary` + `!isInResumedBranch()`), but the repeats that
remain are structural: `writeBranch`/`writeLoop` re-ship the selected
branch's `shellId` (its full record) in every response with a partial, and
boundaries inside divergent contexts keep their content ids + records,
because the server cannot know whether this client's snapshot holds the
same selection. `renderPatch(input)` receives no client state, so this is
future-stage by design: it needs a "client holds X" channel (acked shells /
snapshot summary sent with the patch request). `sentShells` is the
per-response prototype of that bookkeeping.

Check: `persisted-branch-child-state/__snapshots__/patches.js` — the same
`a0;/E%c%l l&;<div class=counter>…</div>` record heads every frame.
