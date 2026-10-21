---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/structure.ts › resolveStructure
---

# Walk a `<table>`'s direct `<tr>` through the `<tbody>` the parser inserts

A client-rendered `<table>` whose first child is a `<tr>` (no `<thead>`/`<tbody>`) breaks walks: the browser's parser wraps the row in an implied `<tbody>`, so the template's walk string, written for `<table><tr>`, lands on the wrong node and `_on` receives `undefined` (`TypeError: Cannot read properties of undefined (reading '1click')`). Server rendering works because resume reads nodes by marker. Either write the implied `<tbody>` into the dom template (as the HTML parser would), or walk through it.

Check: a fixture with `<let/n=0/><table><tr><th><button onClick() { n++ }>${n}</button></th></tr></table>` fails its `csr` step with that TypeError.
