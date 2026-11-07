---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/signals.ts › getHTMLSectionStatements debug `_assert_hoist`
---

# Declare a hoisted alias before its debug SSR assert

In debug HTML output each hoisted binding gets `_assert_hoist(<name>)`, by its identifier. A hoisted alias the server never declares, such as `<const/{ get }=x/>` read only from a handler outside its `<if>` (serialized inline as `get: x.get`), leaves that identifier undeclared, so debug SSR throws `ReferenceError: get is not defined`. Optimized SSR and CSR work. Assert on the expression the scope writes (or declare the alias when it hoists).

Check: a fixture with `tags/child.marko` = `<let/count=1/><return={ get: () => count }/>` and `template.marko` = `<let/log=""/><if=true><child/x/><const/{ get }=x/><button.whole onClick() { log += JSON.stringify(x) }/></if><button.hoisted onClick() { log += get() }/><div>${log}</div>`; debug ssr fails with `ReferenceError: get is not defined`.
