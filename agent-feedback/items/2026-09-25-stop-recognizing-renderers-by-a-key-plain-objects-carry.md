---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/common/helpers.ts › normalizeDynamicRenderer
---

# Stop recognizing renderers by a key plain objects carry

`normalizeDynamicRenderer` treats `value.content || value.default || value` as a renderer when `RendererProp.Id in normalized`, and that key is `"id"` in debug builds and `"a"` in optimized ones. A truthy non-renderer is meant to render the dynamic tag's body (the comment there cites `<${navigator}>x</>`), but an object or a body-less attribute tag that happens to have that key is taken for a renderer and crashes. `<const/rec={ id: 1 }/><${rec}>body</>` or `<@foo id="x"/>` passed to `<${input.foo}>body</>` crash in debug (`renderer is not a function` in SSR, `reading 'nextSibling'` in CSR) and render `body` in optimize; `<@foo a="x"/>` crashes only optimize. Direction: brand renderers with something no plain object or attribute tag carries, the same in both builds, and add fixtures for both spellings.

Check: fixture `tags/child.marko` `<div><${input.foo}>body</></div>` and `template.marko` `<child><@foo id="x"/></child>`, steps `[{}]`: the debug ssr mode throws `TypeError: renderer is not a function` and debug csr throws `Cannot read properties of undefined (reading 'nextSibling')`, while optimize renders `<div>body</div>`. With `<@foo a="x"/>` only optimize ssr throws.
