---
type: feature
impact: med
effort: high
site: packages/runtime-tags/src/dom/patch-boundary.feat.ts › PatchKey.Pending
---

# Pair patches into still-streaming boundaries

A patch arriving while a boundary's initial stream is still pending rejects
into navigation (safe: the construct's marker anchor has not streamed —
pinned by `persisted-await-patch-while-pending`). Supporting it needs the
frame to defer against the initial render's own reorder machinery (apply
once the anchor lands, or supersede the pending chunk outright) rather
than pairing against a node that does not exist yet.

Check: `persisted-await-patch-while-pending` drops `expect_rejection` and
shows the second update applying once mid-stream pairing lands.
