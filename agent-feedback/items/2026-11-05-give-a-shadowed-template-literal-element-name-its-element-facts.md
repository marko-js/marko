---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts › getStaticNativeTagDef
---

# Give a shadowed template-literal element name its element facts

A template-literal tag name always names an element, but `getStaticNativeTagDef` only rewrites it to a string literal with the `marko-html` tag def when no discovered template or core tag shares the name. When `tags/input.marko` exists, ``<${`input`}>`` stays a template literal with no tag def, so `getTagFacts` (which reads `nativeElementFacts` only for a `StringLiteral` name) and every `getTagDef(tag)?.parseOptions?.openTagOnly` read treat the void `<input>` as a content element: HTML writes `</input>`, the DOM template is `<input></input>`, and a spread compiles to `_attrs_content`. Resolve the element's tag def from the `marko-html` taglib regardless of shadowing and key `getTagFacts` by `getTagName`, so the element gets its own facts.

Check: the `controllable-input-spread-shadowed-name` fixture's `html.bundle.js` writes `</input>` and calls `_attrs_content`; the same template without `tags/input.marko` writes no closing tag and calls `_attrs`.
