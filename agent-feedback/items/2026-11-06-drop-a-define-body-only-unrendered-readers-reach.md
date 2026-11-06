---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/core/define.ts › analyze
---

# Drop a `<define>` body that only unrendered readers reach

`<define>` analyze drops its body (`dropContent`) only when its tag variable has no references at all. A variable read only by a binding that prunes (`<const/x=A/>` with `x` unread), or only from content no output renders (a call inside another unreferenced `<define>`), leaves the body emitted by both outputs: the HTML builds a `_content(...)` nothing calls, and the DOM keeps the body's effects as `_script(...)` registrations, which are not pure, so the page bundles them and initializes the resume runtime for code that never runs. Settle the body's fate where pruning and the other drops settle, so it is dropped (`Section.dropped`) like an unreferenced one.

Check: a fixture whose `template.marko` is `<define/A><script>document.body.focus()</script></define><const/x=A/><button>only this</button>` writes a `sizes.json` with `template.marko.page.mjs` at 1532 min / 821 brotli and a `dom.bundle.js` holding `_script(...)`; with the `<const>` removed it is 374 / 232. `<define/B><A/></define>` in place of the `<const>` gives the same 1532 / 821.
