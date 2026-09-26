---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/entry-builder.ts › builder.build
---

# Import the lazy feature only when lazy content resumes branch or html markers

`builder.visit` sets `EntryState.lazy` for any reached template with `loadImports`, and `builder.build` then imports `dom/lazy.feat` into every resuming entry that reaches one, which keeps `dom/resume.ts`'s `lazyEnabled` retention and pending-owner code in the shared runtime chunk. That code only matters when lazy content resumes a branch or dynamic html marker whose enabling helper is not yet loaded; a lazy subtree with only node visits (text, element, handler markers) resumes the same without it, so those pages pay about 35 B brotli for nothing. Direction: record in analyze whether a template resumes branch or html markers (an existing serialize reason on a branch section or `$!{}` range is the likely source) and set `EntryState.lazy` only when a lazily reached subtree does.

Check: `packages/runtime-tags/src/__tests__/fixtures/lazy-tag/sizes.json` `dom.shared` holds the retention code (compare with the same fixture built after deleting the `getRuntimeFeatureImport("lazy")` line in `builder.build`: it still passes, with `shared` about 91 B min / 35 B brotli smaller).
