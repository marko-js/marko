---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/tag-name-type.ts › analyzeTagNameType
---

# Compose the tag that closes a cross-file template cycle

Templates that render each other (`a` renders `b` inside an `<if>`, `b` renders `a`) close the cycle on a template still analyzing, which `analyzeTagNameType` turns into a dynamic tag: the client imports the whole template by its default export and renders it through `_dynamic_tag` rather than composing its template, walks and param signals. Analyze a cycle's templates together instead: have the compiler find the cycle as a strongly connected component of the templates each file read (keeping its members at the "analyze" stage until the component finishes, and forgetting them all if one fails), let a known tag whose child is still analyzing read the child's params tree once the cycle settles, and settle reasons and setup work across the members. Prefer doing this without a new translator export; if the compiler must hand the translator the finished cycle, keep it to one hook. The members' modules may evaluate in any order, so this needs the module-order fixes of `2026-10-12-render-a-cross-file-cycle-closed-by-a-load-tag-or-tag-variable.md`, and the same output from any entry (`2026-10-12-compile-a-cross-file-cycle-member-the-same-from-any-entry.md`).

Check: the `tags-dir-cycle` fixture's `dom.bundle.js` renders `<cyc-a>` inside `tags/cyc-b/index.marko` through `const $dynamicTag = _dynamic_tag(1)` with a default import of `cyc-a`, and its page bundle is 4,305 B brotli.
