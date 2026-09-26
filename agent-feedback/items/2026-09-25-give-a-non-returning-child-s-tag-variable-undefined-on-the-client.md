---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › knownTagTranslateDOM
---

# Give a non-returning child's tag variable `undefined` on the client

A Tag variable on a known child, a `<define>` tag, or a dynamic tag whose content has no `<return>` is `undefined` in SSR, which binds the renderer's return value. On the client its Signal runs only when the child calls `_return` (`dom/signals.ts` › `_var` only installs the callback), so nothing that reads the variable ever renders: `${x === undefined ? "none" : "some"}` is `none` in SSR and empty in CSR. The cheatsheet documents such a variable as `undefined`. Direction: for a known child whose template has no `<return>`, bind the variable as a constant `undefined` and walk it with `BeginChild` instead of `BeginChildWithVar`; for `<define>` and dynamic tags, write `undefined` through the variable when the rendered content does not return.

Check: fixture `tags/child.marko` `<span>child</span>`, `template.marko` `import Child from "./tags/child.marko"` + `<define/Foo><b>foo</b></define>` + `<child/x/>` + `<Foo/z/>` + `<${input.show ? Child : null}/w/>` + one `<div>${v === undefined ? "none" : "some"}</div>` per variable, `equivalent: false`, steps `[{ show: true }]`: `render-ssr.debug.md` shows `none` in all three divs and `render-csr.debug.md` shows them empty.
