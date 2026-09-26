---
type: dx
impact: low
effort: low
site: packages/runtime-tags/src/dom/control-flow.ts › createBranchWithTagNameOrRenderer
---

# Warn when a string dynamic tag name is not in the parser's case

The HTML parser lowercases HTML tag names, but a string dynamic tag name reaches `document.createElementNS` verbatim on the client and is compared case-sensitively on the server (`html/dynamic-tag.ts › voidElementsReg` and the `"textarea"`/`"select"` checks). So `<${"BR"}/>` renders `<BR></BR>` in SSR, which parses as two `<br>` elements, while the client creates one unknown `BR` element, and `"Button"` is an `HTMLButtonElement` in SSR but an `HTMLUnknownElement` on the client. Direction: extend the MARKO_DEBUG `assertValidTagName` call in `createBranchWithTagNameOrRenderer`, where the namespace is known, to reject HTML-namespace names that are not lowercase, and make the server's void/`textarea`/`select` name checks case-insensitive.

Check: fixture `<${input.a}/>` + newline + `<${input.b}>btn</>` with `equivalent: false` and steps `[{ a: "BR", b: "Button" }, (c) => { c.body.setAttribute("data-b", c.querySelector("Button").constructor.name + ":" + c.querySelectorAll("br").length) }]`: `render-ssr.debug.md` shows `HTMLButtonElement:2`, `render-csr.debug.md` shows `HTMLUnknownElement:0`.
