---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/dynamic-tag.ts › _dynamic_tag
---

# Serialize a class API renderer that a stateful dynamic tag picks

`_dynamic_tag` serializes the chosen renderer as `rendererKey(renderer)`, but a class API template has no `RendererProp.Id`, so when the tag name can change on the client (it reads state) SSR throws `Unable to serialize the conditional renderer of `<text>`` — which also names the wrong tag. The client render switches correctly. Give class renderers a resumable key in compat, and name the dynamic tag in the error.

Check: a `fixtures-interop` fixture reusing `interop-dynamic-tag-opaque-class-host`'s components with `<let/useClass=true/>`, a button toggling it, and `<${useClass ? ClassLayout : "section"}>` (plus a static class tag so compat loads): the ssr test throws.
