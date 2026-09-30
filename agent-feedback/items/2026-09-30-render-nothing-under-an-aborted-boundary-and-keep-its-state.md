---
type: cleanup
impact: low
effort: med
site: packages/runtime-tags/src/html/writer.ts › Boundary
---

# Render nothing under an aborted boundary and keep its state

On abort, `Boundary` replaces its `state` with a fresh `State` so late writes land in a throwaway. That swap is why `flushScript`, `consume` and flush-time serialization must be handed the render's root boundary rather than a chunk's own. If every entry point that renders (an `<await>` settling, a `@catch` rendering, a lazy body) skips an aborted boundary, which `_await` and the lazy-throw handling largely do now, the swap and the root-boundary plumbing can go. Direction: add a debug assert that nothing writes into an aborted boundary's chunks or scopes, fuzz with it to find any remaining late-write path, close those, then remove the swap.

Check: with the swap removed, the full suite and the `try-catch-*`/`await-*` fixtures keep their snapshots.
