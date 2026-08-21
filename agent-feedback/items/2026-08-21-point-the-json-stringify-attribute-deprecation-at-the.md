---
type: dx
impact: med
effort: low
site: packages/runtime-class/src/runtime/html/helpers/attr.js › nonVoidAttr
---

# Point the `JSON.stringify` attribute deprecation at the template, not at `attrs.js`

The `complain(…, { locationIndex: 2 })` that fires for an object attribute value is calibrated for `attr()` called straight from a compiled template, and every spread adds a frame: `<div data-direct=obj>` reports `at src/pages/probe/template.marko:24:45`, but `<div ...spread>` in the same file reports `at node_modules/marko/src/runtime/html/helpers/attrs.js:12:19`, and the stock `vite-express-marko-5` example's first `GET /` reports `at node_modules/marko/src/runtime/html/helpers/merge-attrs.js:47:21`. A deprecation whose only frame is inside `marko` cannot be traced to a template or an attribute, and the spread path is exactly where object-valued attributes come from (`app-button`/`app-checkbox` in that example both forward `...attrs`), so a first-party example warns out of the box with nothing to act on. Either derive the index from the caller or raise the complaint from `attrs`/`mergeAttrs`, where the extra frame is known.

Check: with `SHOW_MODULE_COMPLAINS=1`, render a page holding both `<div data-direct=obj>` and `<div ...spread>` where both values are objects — the first warning names the `.marko` file and the second names `helpers/attrs.js`; expect both to name the template.
