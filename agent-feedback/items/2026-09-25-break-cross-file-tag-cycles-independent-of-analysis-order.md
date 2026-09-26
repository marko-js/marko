---
type: bug
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/tag-name-type.ts › analyzeTagNameType
---

# Break cross-file tag cycles the same way regardless of which file is analyzed first

`analyzeTagNameType` makes a tag whose template is still `isAnalyzing` a `DynamicTag` to close a cross-file cycle, so which edge of an A↔B cycle becomes `_dynamic_tag` depends on which file the cache analyzed first. Html and dom agree only when both translate from one analysis; separate SSR and client caches or processes give one output a `_dynamic_tag` with its `<!>` marker and the other an inlined known tag built from the child's `$template`/`$walks`, so walks and markers mismatch on resume. Detect when the child's analysis reaches back to the current file and make every edge inside the cycle dynamic (this needs transitive reachability recorded on the program extra), and cover it with a test that compiles each cycle member first in a fresh cache and diffs the output.

Check: `pnpm run compile -- -o html -d packages/runtime-tags/src/__tests__/fixtures/import-tag-cycle/tags/cyc-b.marko` (cyc-b analyzed first) calls `CycA({ depth: input.depth + 1 })` inline, while that fixture's `__snapshots__/html.bundle.debug.js` (cyc-b analyzed after cyc-a through `template.marko`) renders the same edge as `_dynamic_tag($scope0_id, "#text/1", cyc_a_default, …)`; `-o dom` likewise inlines `_CycA_template`/`_CycA_walks` where the fixture's dom bundle uses `_dynamic_tag("#text/1")` (delete the emitted `tags/cyc-b.marko.js` afterward).
