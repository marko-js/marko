---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/html/writer.ts › patchPartial
---

Every patch frame in which a `<try>`'s branch partial materializes re-ships
the boundary's content id plus its catch/placeholder content ids in the
pairing entry (`[partial, contentId, catchId?, placeholderId?]`), because the
server cannot know whether the client's branch is live or must construct.
For a long-lived page with async tries this is O(frames) repeated id strings
the client only needs once (or never, when the branch stays paired).

A per-response "server knows what the client has" elision phase (the same
lever noted for setup-channel unification) could drop the ids after the
first frame of a response, or a client-acknowledged session could drop them
entirely.

Check: render `persisted-async-try-catch-only` with two patch steps and
observe the same `template.marko_2*content` id in each frame's
`PatchChild:BranchScopes:` entry of `patches.debug.js`.
