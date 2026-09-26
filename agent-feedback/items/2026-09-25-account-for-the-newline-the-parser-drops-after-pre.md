---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts › normalizeTag
---

# Account for the newline the parser drops after `<pre>`

The HTML parser drops one LF right after a `<pre>` (and `<listing>`) start tag, both when parsing the client template and when parsing SSR output, and only `<textarea>` compensates (`translator/core/textarea.ts`, `html/attrs.ts › _textarea_value`). So `<pre>` + newline + `${input.x}<b>bold</b></pre>` compiles a template whose leading text node the parser removes, the walk shifts, and the client render replaces `<b>` with the text. A `<pre>${input.text}</pre>` whose value starts with LF shows one newline fewer in SSR than in a client render. Direction: in pre-analyze, strip one leading newline from a `<pre>`'s first static text, and in HTML output write a sacrificial LF after `<pre>` when its first rendered character can be a dynamic LF, as `<textarea>` does; add fixtures.

Check: fixture `<pre>` + newline + `${input.x}<b>bold</b></pre>` + newline + `<pre>${input.text}</pre>` with `equivalent: false` and steps `[{ x: "a", text: "\nhello" }, (c) => { const p = c.querySelectorAll("pre")[1]; p.setAttribute("data-len", String(p.textContent.length)) }]`: `render-csr.debug.md` shows the first `<pre>` without `<b>` and `data-len="6"`, `render-ssr.debug.md` keeps `<b>` and shows `data-len="5"`.
