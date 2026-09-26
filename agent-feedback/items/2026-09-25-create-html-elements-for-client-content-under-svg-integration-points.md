---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/renderer.ts › createBranch
---

# Create HTML elements for client content under `<foreignObject>` and other integration points

Client-created content takes its namespace from `parentNode.namespaceURI` (`dom/renderer.ts › createBranch`, `dom/dom.ts › _html`, `dom/control-flow.ts › createBranchWithTagNameOrRenderer`, `dom/load.ts › insertLoaded`), but under an HTML integration point (`<foreignObject>`, SVG `<desc>`/`<title>`, MathML `<mi>`/`<mo>`/`<mn>`/`<ms>`/`<mtext>`) the page parser creates HTML elements. So `<svg><foreignObject><if=editing><input/></if></foreignObject></svg>` inserts an `svg:input` (no form control, nothing rendered) on the first client toggle, both after resume and in a client render, and a string dynamic tag there becomes an SVG element too. Direction: resolve the child namespace through one helper that maps integration-point parents to the XHTML namespace and use it at each of these call sites, with a fixture.

Check: fixture `<let/editing=false>` + `<svg><foreignObject width="100" height="100"><if=editing><input value="x"/></if></foreignObject></svg>` + `<button onClick() { editing = !editing }>toggle</button>` with steps `[{}, click, (c) => { c.querySelector("button").textContent = "ns:" + c.querySelector("input").namespaceURI }]`: `render.debug.md` shows `ns:http://www.w3.org/2000/svg`.
