---
type: cleanup
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/evaluate.ts › getKind
---

# Add a value kind for a value that cannot be serialized so client code reading one is a compile error

An instance of a class the template itself writes can never be serialized (`html/serializer.ts` › `writeUnknownObject` knows only built-in constructors), yet `getKind`'s `NewExpression` arm gives it the same `KIND_OBJECT` as `new Map()` or `new Date()`, which serialize. So client code that reads one compiles, a debug SSR render throws `Unable to serialize`, and a production one omits the value. A bit for "the template shows this cannot be serialized", set only where it can prove it (a `new` of a class expression, or of a `<const>` holding one), would let the step that decides a binding is written for the client (`solve-reasons.ts` › `getReasonForBinding`) report a compile error at the read. The kind is cheap, one bit, and a value from a JS module stays unknown and keeps the runtime check.

Check: a fixture with `<const/point=new (class Point { x = 1 })()/><button onClick() { console.log(point) }>log</button>` and `error_html: true, skip_csr: true, skip_optimize: true` writes `Unable to serialize "point"` to `ssr.error.debug.txt`, while `pnpm run compile -- -o html -d` on it reports no error.
