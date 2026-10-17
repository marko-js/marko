---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/patch/refresh.ts › enclosingMayCreate
---

# Ship a content shell only where a patch can create the content

In a page, content a known child renders whole at its own root is never
created by a patch, yet `contentMayCreate` answers yes for it:
`enclosingMayCreate` ends in `return fromRead || !isPage()`, and a read
always passes `fromRead`. So `isCreatableContent` ships its shell, and
`seedsCreatedScope` a seed, for the layout pattern (a page's static body
handed to a layout rendering `<${input.content}/>`). In a template that is
not a page the same shell is needed, as a caller may create the call.

The fix needs a split: drive shells and seeds by a narrowed predicate
(a read at a callee's root creates only what its call creates) while
`patchWritesScope` keeps the broad one, which resumed content relies on
for its closures (narrowing both breaks `patch-derived-in-content-*` and
`patch-catch-content-to-child`, whose patches reject). Two gaps block the
narrowed predicate:

- `enclosingMayCreate` does not count content inside a created `@catch`.
- A valid callee switching its own renderer,
  `<const/c=input.content/><div><${input.flag ? c : null}/></div>`,
  creates the content though it renders it at its root. A dynamic tag's
  read merges its name with its inputs (`mergeReferences`), so telling
  this from `<${input.content} label=…/>` needs the name's own bindings
  kept as a new fact.

Measured with the narrowed predicate: dom -5,255 B min / -2,029 B brotli
over 40 fixtures, patches +18 / -8.

Check: `patch-page-layout-content-shell`'s html bundle lists the page
body's content shell (`template.marko_1*content`) in `_shells`, though no
step creates it.
