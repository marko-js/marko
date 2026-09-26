---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/generate-uid.ts › generateUid
---

# Restart uid counts when a template is re-analyzed after an edit

`generateUid` keeps its per-name counters in `markoOpts.cache` under `uid-counts:<filename>` with no content hash, and an analysis that finds an entry keeps counting from it. After an edit invalidates the file's compile-cache entry (`compiler/src/babel-plugin/index.js › getMarkoFile`), the new analysis therefore starts from the previous analysis's counts, so a warm-cache compile of the edited file differs from a cold one: exports become `$template2`/`$setup2` and function register ids `…/inc2` instead of `…/inc`. A server and a client whose caches have different histories then disagree on register ids, though the `cache` doc in `compiler/config.d.ts` promises content rechecking, not different output. Start from `getInitialCounts(file)` and overwrite the entry whenever a new MarkoFile is analyzed (resetting the `uid-shared:` entries `getSharedUid` keys the same way too, or their stale names collide with the restarted counts), and add a compiler test that compile → edit → recompile in one cache equals a cold compile.

Check: in a `node -r ~ts` script at the repo root, with `file` an absolute path ending in `template.marko`, run `compileSync(src, file, { translator: "@marko/runtime-tags/translator", output: "dom", cache })` with `src = "<let/count=0>\n<const/inc = () => count++>\n<button onClick=inc>${count}</button>\n"`, then again with the same `cache` and `src + "<p>edited</p>\n"`: the second (CommonJS) output exports `$template2` and `$setup2` and assigns `_resumed["…template.marko_0/inc2"]`, while the edited source with a fresh `Map` gives `$template`, `$setup` and `…_0/inc`; `output: "html"` likewise passes `"…template.marko_0/inc2"` to `_resume`.
