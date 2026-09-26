---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/util/runtime.ts › pureDOMFunctions
---

# Keep a template the server serializes as a dynamic tag name in the client bundle

A `<let>` whose initial value is an imported template and that the client never assigns serializes as `_._["<template id>"]`, but in the optimized client bundle the only reference to that template is the page `$setup`, which a resumed page shakes away, and `_template` is `/*@__PURE__*/`, so the template module and its `_resumed` registration are dropped. The `pureDOMFunctions` comment claims a serialized register id keeps the value in the module graph; this case breaks that. When anything re-runs the dynamic tag after resume (an `_or` over the name and its input), the name resolves to `undefined` and the branch is torn down. Direction: when a binding that can serialize a registered renderer is read by a retained client signal, keep a reference to each template it may hold (or emit its registration impure).

Check: fixture with `tags/child.marko` = `<span>${input.value}</span>` and `template.marko` = `import Child from "./tags/child.marko";` `<let/count=1/>` `<let/Tag=Child/>` `<${Tag} value=count/>` `<button onClick() { count++ }>inc</button>`, steps `[{}, (d: Document) => d.querySelector("button")!.click()]`: the parity check fails, the optimize ssr log records `REMOVE: span` where debug records `UPDATE: span::text "1" => "2"`, and optimized `dom.bundle.js` has no `tags/child.marko` module.
