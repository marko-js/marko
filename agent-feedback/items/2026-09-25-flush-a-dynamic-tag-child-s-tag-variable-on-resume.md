---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/html/writer.ts › _var
---

# Flush a dynamic tag child's tag variable on resume when the child writes no scope

html `_var` writes the child's `#TagVariable` with `writeScopePassive`, and passive props flush only with a scope that is written for another reason. A known child gets that write from `_existing_scope($childScope)` in the parent's `_scope` call, but a dynamic tag (`<${Tag}/v/>` with a non-constant name) has none. So when the dynamic child serializes no state of its own, its resumed Branch has no TagVariable and every `_return` it makes after resume is dropped, though CSR updates the variable. Direction: write the dynamic child's scope non-passively (the equivalent of `_existing_scope`) whenever `_var` registers its tag variable.

Check: fixture with `tags/child.marko` = `<let/n=0/>` `<return={ n, set(value) { n = value } }/>` (no markup) and `template.marko` = `import Child from "./tags/child.marko";` `<let/Tag=Child/>` `<${Tag}/v/>` `<button onClick() { v.set(v.n + 1) }>${v.n}</button>`, `equivalent: false`, steps `[{}, (d) => d.querySelector("button")!.click()]`: `render-csr.debug.md` updates the button to `1`, `render-ssr.debug.md` records no change, and the resume data in `writes.debug.html` holds only scope 1 (scope 2, the dynamic child, appears only as the scope `set: _(2, …)` is bound to), so the `template.marko_0_v#5/var` registration is never sent.
