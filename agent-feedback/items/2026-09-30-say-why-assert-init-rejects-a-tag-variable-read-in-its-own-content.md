---
type: unclear
impact: low
effort: low
site: packages/runtime-tags/src/dom/scope.ts › _assert_init
---

# Say why `_assert_init` rejects a tag variable read in its own content

A tag variable read during render inside the content of the tag that declares it (`read.ownVar`) is read before that tag's `<return>` can be relied on, since the child decides whether its content renders before or after it returns. Debug builds reject it through `_assert_init` with `Cannot access 'x' before initialization`, even when the child happens to return first: with `tags/child.marko` as `<return={ content: input.content }/>`, `<let/show=true/><if=show><child/x><span>${typeof x}</span></child><${x.content}/></if>` throws. That matches marko-js/website `docs/reference/language.md` › Tag Var Scope (a tag variable is read after render, not by an interpolation), but neither those docs nor the message says the rule covers a tag's own content, so the error reads as a runtime bug. Name the case in the message (read in its own tag's content while rendering; read it in a script or event handler instead), and add it to Tag Var Scope.

Check: render that template in a debug fixture; it throws `Cannot access 'x' before initialization`.
