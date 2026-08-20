---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/writer.ts › patchPartial
---

Every patch response in which a boundary/child pairing entry materializes
re-ships the content id AND its full shell record (`shipShell`), because the
server cannot know whether the client's branch is live or must construct.
For a paired branch this repeats the branch's entire markup in every
response the client ignores — and in small templates a single patch frame
can exceed the fresh html response, breaking the wire-size invariant (patch
< html). Example: `persisted-branch-child-state` ships
`a0;/E%c%l l&;<div class=counter>…</div>` in both frames while a fresh html
response is smaller than one frame.

The server renders against the client's persisted snapshot, so it can know:
if the branch scope existed in the incoming snapshot, the client has it live
and neither the record nor the content ids are needed; only a branch the
render newly materializes needs them. A snapshot-aware elision in
`pairBranch`/`patchPartial` (or a client-acknowledged session) removes the
repeat entirely.

Check: `persisted-branch-child-state/__snapshots__/patches.js` — the same
shell record heads every frame; compare byte size to `writes.html`.
