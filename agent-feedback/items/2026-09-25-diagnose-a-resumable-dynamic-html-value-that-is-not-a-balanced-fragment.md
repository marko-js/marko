---
type: unclear
impact: med
effort: low
site: website/docs/reference/language.md › Unescaped Text
---

# State on the unescaped-text docs page that a `$!{}` value must be a balanced fragment

`html/writer.ts › _html_resume` brackets the markup between HtmlStart and HtmlEnd resume comments, and the first client update replaces exactly that range (`dom/dom.ts › _html`). An unclosed tag in the value pulls the end comment and the following siblings into its element, and a stray end tag closes the parent early, so after resume that update removes the wrong nodes or throws. Only the debug build reports it and only `packages/runtime-tags/cheatsheet.md` states the rule; the markojs.com Unescaped Text section warns only about XSS, so an author passing truncated CMS excerpts learns it from a production failure. Direction: add a caution there that the value must parse as a balanced fragment where it is placed.

Check: <https://markojs.com/docs/reference/language.md>, section "Unescaped Text": its only caution is about XSS.
