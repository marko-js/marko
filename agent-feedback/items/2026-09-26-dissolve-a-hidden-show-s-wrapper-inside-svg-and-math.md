---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/control-flow.ts › _show
---

# Dissolve a hidden `<show>`'s wrapper inside `<svg>`/`<math>`

`_show` recognizes the server's `<t hidden>` wrapper by `tagName === "T"`, but inside `<svg>`/`<math>` the parser makes that wrapper a foreign `t` element whose `tagName` is `"t"`. So a `<show>` the server rendered hidden there keeps its wrapper after resume, counts as already in the DOM, and its content stays inside an unknown SVG element that never renders. Direction: match the wrapper by `localName === "t"` (or compare case-insensitively), and add the fixture below; "Give a hidden `<show>` a wrapper legal in table/select insertion contexts" may replace the wrapper, so keep the two in step.

Check: fixture `<let/visible=false><svg><show=visible><circle r="1"/></show><g/></svg><button onClick() { visible = !visible }>show</button>`, `equivalent: false`, steps `[{}, click]`: `render-ssr.debug.md` records no change and keeps the `<circle>` inside `<t hidden>`, while `render-csr.debug.md` shows `INSERT: svg > circle`.
