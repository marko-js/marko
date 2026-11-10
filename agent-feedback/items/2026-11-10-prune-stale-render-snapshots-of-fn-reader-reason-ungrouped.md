---
type: dx
impact: low
effort: low
site: packages/runtime-tags/src/__tests__/fixtures/fn-reader-reason-ungrouped/test.ts › config
---

# Prune the stale render snapshots of `fn-reader-reason-ungrouped`

The fixture sets `equivalent: false`, so it writes `render-ssr.md`/`render-csr.debug.md` and never `render.md`/`render.debug.md`, yet both are committed. Any full `pnpm run test:update` deletes them, so an unrelated change picks up the deletion. Regenerate the fixture on its own so the two files go.

Check: `pnpm run test:update -- --grep "runtime-tags/translator fn-reader-reason-ungrouped "` on `main` leaves `git status` showing both files deleted.
