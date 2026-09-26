---
type: dx
impact: med
effort: low
site: packages/runtime-tags/src/html/writer.ts › _html_resume
---

# Diagnose a resumable `$!{}` value that is not a balanced fragment

`_html_resume` brackets the markup between HtmlStart and HtmlEnd resume comments, and the first client update replaces exactly that range (`dom/dom.ts › _html`, then `removeChildNodes`). An unclosed tag in the value pulls the end comment and the following siblings into its element, and a stray end tag closes the parent early, so after resume the first update removes the wrong nodes or throws: `$!{"<b>open"}` throws `Cannot read properties of null (reading 'nextSibling')`. The unescaped-text docs only warn about XSS, so nothing tells the author that the value must be balanced (truncated CMS excerpts hit this). Direction: under MARKO_DEBUG, check in `dom/resume.ts` when an HtmlEnd comment is visited that it shares a parent with its HtmlStart, report that the `$!{}` value must be a balanced fragment, and add that rule to the unescaped-text docs.

Check: fixture `<let/h="<b>open">` + `<div>$!{h}<span>after</span></div>` + `<button onClick() { h = "closed" }>set</button>` with `skip_csr: true` and steps `[{}, click]`: the ssr modes throw `Cannot read properties of null (reading 'nextSibling')` in `removeChildNodes`.
