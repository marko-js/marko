---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/util/runtime.ts › pureDOMFunctions
---

# Keep a template the server serializes as a dynamic tag name in the client bundle

A `<let>` whose initial value is an imported template and that the client never assigns serializes as `_._["<template id>"]`, but in the optimized client bundle the only reference to that template is the page `$setup`, which a resumed page shakes away, and `_template` is `/*@__PURE__*/`, so the template module and its `_resumed` registration are dropped. The `pureDOMFunctions` comment claims a serialized register id keeps the value in the module graph; this case breaks that. When anything re-runs the dynamic tag after resume (an `_or` over the name and its input), the name resolves to `undefined` and the branch is torn down. Direction: a template reaches the resume data only as the value of a binding the server writes (a `<let>` or `<const>` here); the server never writes a dynamic tag's renderer, since the client re-derives it from the tag name. So keep a template registered only when a written binding may hold it, for instance by importing a generated module that assigns it to `_resumed`, the way `module-registrations.ts` keeps an imported registered function. Keying this on the serialize reason of each reference instead over-bundles: that reason is forced for every template reference in an interactive template, so a template passed as an attribute (`<heading type=Card/>`) or used as a static dynamic tag name would be kept for nothing, and a page with no client code would be marked interactive. A binding in a child that stores a template passed in as input needs the same, which only that child's analysis can see.

Check: fixture with `tags/child.marko` = `<span>${input.value}</span>` and `template.marko` = `import Child from "./tags/child.marko";` `<let/count=1/>` `<let/Tag=Child/>` `<${Tag} value=count/>` `<button onClick() { count++ }>inc</button>`, steps `[{}, (d: Document) => d.querySelector("button")!.click()]`: the parity check fails, the optimize ssr log records `REMOVE: span` where debug records `UPDATE: span::text "1" => "2"`, and optimized `dom.bundle.js` has no `tags/child.marko` module.
