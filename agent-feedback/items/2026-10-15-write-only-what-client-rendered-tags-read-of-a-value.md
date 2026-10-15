---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/signals.ts › writeHTMLResumeStatements
---

# Write only what client-rendered tags read of a value

A value the client may pass to a tag it renders (an input in a branch the client may create, as in `<if=show><Card record=input.record/></if>`, or a dynamic tag's attribute) is written to the page whole, though analysis knows what the callee reads of it: the `<define>`'s or template's param property aliases, and the `<define>`s and templates a dynamic tag name can be. A record passed to a component reading two fields ships every field, a `passwordHash` included, and a list ships every field of every item. A binding's reads could follow a whole read that lands as a known tag's attribute or argument into the callee's param, a dynamic tag attribute into each enumerable candidate, a `<for of>` into its items (plus a string `by` key), and treat a truthiness test as reading nothing; any other whole read (a function, a comparison, a spread, an unknown callee, a `<let>`, an assignment) keeps the value whole so identity-sensitive code never sees a copy. "Serialize only the accessed properties of scope values" covers a binding read by property in its own template.

Check: add a fixture whose `template.marko` is `<let/show=false/><define/Card|{ record }|><h4>${record.name}</h4><p>${record.tree.name}</p></define><main><if=show><Card record=input.record/></if><button onClick() { show = !show }>toggle</button></main>` and whose steps are `[{ record: { name: "a", passwordHash: "HASH", tree: { name: "t", secret: "SECRET" } } }, click]`; after `pnpm run test:update -- --grep "runtime-tags/translator <name> "`, `writes.html` holds `passwordHash: "HASH"` and `secret: "SECRET"`. The same holds through `<${useA ? Card : Other} record=input.record/>` and for `ssn` fields of items a `<for|child| of=record.children by="id">` reads only `name` of.
