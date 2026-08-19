---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/html/writer.ts › Chunk.writeEffect
---

# Delta-encode the scope ids in the `_script` effects string

`writeEffect` already elides a repeated `registryId` but writes absolute scope ids, so a 129-instance page emits `"b0 3 5 7 9 … 261"`. Making every bare scope-id token after the first in a run relative to the previous id measures 8808/885 → 8601/792 (-207 raw / -93 brotli, 10.5% of that page's brotli, or -1.6 raw / -0.72 brotli per effect-bearing instance); a run token (`"b0 3~261:2"`) reaches -459/-110. Concatenation safety already holds: `Chunk`'s constructor sets `lastEffect = ""`, so every chunk's effects string begins with a registryId token, and the decoder (`processResumes` in `dom/resume.ts`, the `/\D/.test(lastToken)` branch) can reset its running base on each non-numeric token; the writer needs a `lastEffectScope` field carried alongside `lastEffect` through `append`/`consume`/`deferOwnReady`, and the read side becomes `base += +lastToken` in place of `getScope(lastToken)`. Same idea as "Range-encode the branch ids packed into a single-node loop's BranchEnd marker" applied to a different string — monotonically increasing scope ids appear in five places (node markers, the effects string, `BranchScopes`/`ClosureScopes` arrays, BranchEnd id lists, `_(N)` refs) and that entry covers one of them.

Check: TODO
