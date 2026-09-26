---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/control-flow.ts › rendererKey
---

# Key ownerless template renderers apart from native tag names

`rendererKey` (and its server twin `html/writer.ts › rendererKey`) returns a native tag name unchanged and an ownerless renderer by its bare id, and a `_template` renderer has no owner. Under `optimizeKnownTemplates`, `encodeTemplateId` gives short ids such as `a`, `b`, `i`, `p`, `q`, `s`, `u` (and `em`, `br` at larger indexes), so `<${cond ? Child : "b"}>` computes the same key for both values when Child's id is `"b"`: `_dynamic_tag` keeps the native branch and calls Child's Params on the native branch scope. Give ownerless renderers a key no tag name can take in both runtimes (the owner-bound key already joins with a space, which tag names cannot contain), and fix the comment in `rendererKey`, which assumes only Class-API interop renderers are ownerless.

Check: fixture `template.marko` with `import Child from "./tags/child.marko"`, `<let/useChild=false>`, `<button onClick() { useChild = !useChild }>toggle</button>`, `<div id="x"><${useChild ? Child : "a"} label="L"/></div>` and `<div id="y"><${useChild ? Child : "b"} label="L"/></div>`, `tags/child.marko` `<span>child ${input.label}</span>`, steps `[{}, click the button]`: `pnpm run test:update -- --grep "runtime-tags/translator <fixture> "` fails with "render.md diverges between optimize and debug" because after the click the optimized `#y` (whose native name `"b"` equals Child's id, `_template("b", …)` in `dom.bundle.js`, when the fixture directory lists `template.marko` before `tags/child.marko`) still holds `<b label="L">` instead of `<span>child L</span>`.
