---
type: bug
impact: low
effort: med
site: packages/compiler/src/babel-plugin/parser.js › onText
---

# Trim newline-led whitespace beside tags that render nothing

`onText` strips newline-led whitespace next to a tag only when the tag is a statement tag (`parseOptions.statement`) or an attribute tag; every other tag is treated as rendered content, including core tags that write nothing to the page (`<const>`, `<let>`, `<id>`, `<script>`, `<lifecycle>`, `<return>`). So the text after such a tag keeps a collapsed space, visible in inline content: `<p>a<span>\n<const/x=1>\nb${x}</span></p>` writes `<p>a<span> b1</span></p>` (and the DOM template `<p>a<span> b<!></span></p>`), while the same markup without the `<const>` writes `<p>a<span>b</span></p>`. Mark tags that render nothing with a parse option the taglib can set, have `onText` (both the leading trim and the `onNext` trailing trim) treat it like `statement`, and set it on those core tags; add a fixture.

Check: `pnpm run compile -- -o html -d` on `<p>a<span>` + newline + `<const/x=1>` + newline + `b${x}</span></p>` emits ``_html(`<p>a<span> b${_escape(x)}</span></p>`)``; on `<p>a<span>` + newline + `b</span></p>` it emits `_html("<p>a<span>b</span></p>")`.
