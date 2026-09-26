---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/dom.ts › _html
---

# Keep a resumed `$!{}` in place on its first update when its value is unchanged

A resumed scope holds no `AccessorPrefix.DynamicHTMLValue` slot for a server-rendered `$!{}`, since `dom/resume.ts › init` claims the HtmlStart/HtmlEnd range but the server never sends the string it wrote. So on the first update after resume `_html` re-parses and replaces its whole range although the value is unchanged, dropping focus, caret, `<details>` open state and element identity inside it; a resumed `<for|x|>$!{x}</for>` re-creates every server-rendered row the first time the list changes. Serializing the value would ship the markup twice, so this needs a maintainer decision: serialize it, find another way for `_html` to know the server value, or accept it with a site comment.

Check: fixture `<let/n=0>` + `<const/html=(n > 100 ? "<i>big</i>" : "<b>small</b>")>` + `<div>$!{html}</div>` + `<button onClick() { n++ }>${n}</button>` with `equivalent: false` and steps `[{}, click]`: `render-ssr.debug.md` logs `INSERT: div > b` and `REMOVE: div > b + b` on the click while `render-csr.debug.md` logs only the button text.
