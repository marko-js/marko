---
"@marko/runtime-tags": patch
---

A `<const>` or `<let>` function that keeps a value declared by a tag below it (`<const/show=() => run(format)>` beside `<const/format=…>`) no longer throws `ReferenceError: $scope is not defined` when the browser runs it. The DOM output now gives a registered function the scope its hoisted read goes through, whether it calls the value or keeps it.
