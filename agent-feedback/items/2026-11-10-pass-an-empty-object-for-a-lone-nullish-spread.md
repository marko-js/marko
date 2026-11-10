---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/translate-attrs.ts › propsToExpression
---

# Pass an empty object for a lone spread of a nullish value, as `{ ...x }` does

`propsToExpression` unwraps a lone spread to its argument, so `<child ...maybe/>` passes `maybe` itself as the child's `input`, and `<define/Note ...maybe/>` makes `Note` be `maybe`. Both are read as never nullish (the program's input binding and the `<define>` tag variable clear `nullable`), so a nullish `maybe` throws where spreading it gives `{}`; for the custom tag only the server render throws, since the client's member forwards read `$scope.maybe?.foo`. Keep the unwrap where `evaluate` finds the argument non-nullable and emit `{ ...maybe }` (or `maybe || {}`) otherwise, weighing the bytes with `build:sizes`.

Check: a fixture with `tags/child.marko` `<div>${input.foo}</div>` and template `<const/maybe=input.maybe/><child ...maybe/>` throws `Cannot read properties of undefined (reading 'foo')` in `ssr` and renders `<div />` in `csr`; template `<const/maybe=input.maybe/><define/Note ...maybe/><div>${Note.foo}</div>` throws in both.
