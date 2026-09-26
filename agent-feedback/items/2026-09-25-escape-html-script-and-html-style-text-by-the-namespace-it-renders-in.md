---
type: bug
impact: high
effort: high
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › isRawTextTag
---

# Escape `<html-script>`/`<html-style>` text by the namespace it renders in

`isRawTextTag` picks the server escaper from native ancestors in the same template, so a `<script>`/`<style>` that renders under an `<svg>`/`<math>` the walk cannot see (a tag from another template, a `<define>` body used inside `<svg>`, a dynamic tag that resolves to `svg`) still gets `_escape_script`/`_escape_style`. Foreign content parses that text as markup, so this is markup injection: `<svg><script type=application/json>{"a":"<img src=x onerror=alert(1)>"}</script></svg>` parses to an html `<img>` whose `onerror` runs. The converse misfires too: under an integration point or breakout it cannot see (a dynamic tag that resolves to `foreignObject`, or `<svg><div>`, where the parser closes the `<svg>`) the tag gets `_escape`, and a `&amp;` in the value renders literally. Tag names cannot answer this across templates; direction: when the walk ends without a namespace answer, decide at render time from a namespace the html writer carries through `withContext`/`getContext` (as `html/attrs.ts` does for `<select value>`).

Check: `pnpm run compile -- -o html -d probe.marko` on `<define/Foo><html-script type="application/json">${input.v}</html-script></define>` + `<svg><Foo/></svg>` emits `_escape_script(input.v)`, and on `<svg><${input.fo ? "foreignObject" : "g"}><html-style>.a{color:${input.v}}</html-style></></svg>` emits `_escape(input.v)`.
