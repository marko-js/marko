---
type: bug
impact: med
effort: low
site: packages/runtime-class/src/runtime/vdom/morphdom/index.js › insertVirtualNodeBefore
---

# Create HTML elements under `<foreignObject>` in Marko 5's VDOM

`insertVirtualNodeBefore` passes `parentEl.namespaceURI` to `VElement.___actualize`, which keeps the parent's namespace for every tag but `svg`/`math` (`DEFAULT_NS`). So every element a client render creates inside `<foreignObject>`, SVG `<desc>`/`<title>`, or MathML `<mi>`/`<mo>`/`<mn>`/`<ms>`/`<mtext>` is SVG or MathML, where the page parser makes it HTML: an `<input>` there renders nothing, both on mount and when an `<if>` adds it. Direction: resolve a child's namespace to XHTML under those parents before `___actualize`, as `runtime-tags/src/dom/parse-html.ts` › `getChildNamespace` does, with a `components-browser` fixture.

Check: `components-browser` fixture `<svg><foreignObject key="fo"><input key="static"/><if(state.on)><input key="in"/></if></foreignObject></svg>` (class with `state = { on: false }`), `helpers.mount`, then `state.on = true; update()`: `getEl("static").namespaceURI` and `getEl("in").namespaceURI` are both `http://www.w3.org/2000/svg`.
