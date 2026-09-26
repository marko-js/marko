---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts › normalizeTag
---

# Keep a namespace prefix on a bound native attribute instead of reading it as a refining function

`packages/compiler/src/babel-plugin/parser.js › onAttrName` splits an attribute name at its last `:` into name and modifier, and `normalizeTag` rejoins the two only for unbound attributes; for a bound one it hands the modifier to `getChangeHandler` as a refining function. So `<svg><use xlink:href:=x/></svg>` writes an `xlink` attribute plus an `xlinkChange` attribute whose handler calls an undeclared `href(_new_x)`, where `<use xlink:href=x/>` correctly writes `xlink:href`. On a native tag, treat a bound attribute whose name is a namespace prefix (`xlink`, `xml`, `xmlns`) as namespaced, or raise a compile error naming the ambiguity, and add a fixture.

Check: `pnpm run compile -- -o html -d` on `<let/x="#a">` + newline + `<svg><use xlink:href:=x/></svg>` emits `_attr("xlink", x)` and `_attr("xlinkChange", _resume(_new_x => { x = href(_new_x); }, …))`.
