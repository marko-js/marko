---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/patch-boundary.feat.ts › beginAwaitPending
---

# Show a flush-created await body when its value settles in a later flush

A flush that creates a `<try>` with an `@placeholder` around an `<await>` whose
promise settles in a later flush of the same response leaves the page on the
placeholder: the settle flush arrives (a `PatchChild:BranchScopes:` partial for
the await under the try's entry) but the body it fills never shows, so the
document stays at `Loading` where a fresh render shows the body. A settle in
the first flush (a synchronous value) renders. The shape needs no lazy
template, `<draft>`, or nested `<try>`: a `<try>`+`@placeholder`+`<await>` inside
a server-driven `<else>` branch is enough. Trace the settle flush through
`patchers[PatchKey.Child]`, `attachDetachedAwait` and `endAwaitPending` for a
branch `patchers[PatchKey.Pending]` created with `DetachedAwait`: the first
flush ships the await's child partial next to its `PatchPending` entry, so
check what `markSettled` and the queued `beginAwaitPending` leave for the
second flush to complete.

Check: `pnpm test -- --grep "runtime-tags/translator patch-draft-await-create "`;
`debug > ssr` fails at the third `next` step (after the `navigate` whose `total`
is `resolveAfter(9, 10)`) with the body `<span>Page 1</span>Loading`. It still
fails with `load: "render"` removed from `template.marko` and `<draft>`/
`<action>` replaced by `<const>` in `page.marko`.
