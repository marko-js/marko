---
type: dx
impact: med
effort: high
site: packages/runtime-class/src/runtime/vdom/hot-reload.js › exports.t
---

# Give the browser suites a hot-reload mode

`packages/runtime-class/src/runtime/vdom/hot-reload.js` is the client half of HMR — it re-registers a template's render function, re-prototypes live component instances and re-renders them. It sits at 0% and is the single largest uncovered block left in the repo (98 statement/branch/function units).

Nothing can reach it. A template only imports it when `markoOpts.hot` is set (`translator/index.js` picks `runtime/<html|vdom>/hot-reload.js` over `index.js`), and no harness compiles that way: `components-browser` compiles `output: "dom"` without `hot`, and `test/hot-reload` drives the server half through `marko/src/node-require/hot-reload` in Node. Covering it needs a browser suite that compiles with `hot` and can swap a component's render function between renders — a harness, not a fixture.

Check: `rg -n 'hot' packages/runtime-class/test/components-browser/index.test.js` returns nothing, and `rg -n 'vdom/hot-reload' packages --glob '!**/dist/**'` matches only the `getRuntimeEntryFiles` manifest entry.
