---
type: bug
impact: low
effort: low
site: packages/runtime-class/src/translator/tag/util.js › getAttrs
---

# Name a Class attribute tag's body `content` under a Tags parent when it also has attribute tags

`getAttrs` names an attribute tag's body `content` (and wraps it with the tags-compat `c` helper) when the owning tag is a Tags component, but only on its keyed-property path. An attribute tag that has both nested attribute tags and a body goes through `marko/src/runtime/helpers/attr-tag.js` › `i`, which always stores the body as `renderBody`. The Tags component then sees `inner,renderBody` on the attribute tag and no `content`, so neither `<${input.stuff.content}/>` nor a spread renders the body. Name it `content` and wrap it as the keyed path does when the root tag is a Tags component, for example with a flag or a sibling helper to `i`.

Check: a `fixtures-interop` Class template rendering `<tags-layout><@stuff><@inner>inner</@inner>Body</@stuff></tags-layout>`, with `components/tags-layout.marko` as `// use tags`, `<div id="passthrough"><${input.stuff.content}/></div>` and `<div id="keys">${Object.keys(input.stuff).join(",")}</div>`, renders an empty `#passthrough` and `inner,renderBody` in `#keys`.
