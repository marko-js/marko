---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › createBindingsAndTrackReferences
---

# Model the pattern defaults pre-analyze leaves in place

`moveDefaultsToConstTags` lowers a pattern default to a `<const>`, but two kinds stay in the pattern, and analysis drops them: `createBindingsAndTrackReferences` binds an `AssignmentPattern` as its `left` and links its `right` to nothing. An attribute tag `<for>` keeps its param defaults in the loop callback (a `<const>` cannot sit among attribute tags), and `for` analyze derives its params from the loop's attributes alone. So a default reading a `<let>` leaves that `<let>` unread while the callback reads a slot nothing writes, and one reading `input.x` calls a `$input_x` signal that is never declared: CSR renders the item empty or throws `ReferenceError`, and neither CSR nor a resumed page updates when the value read changes. A rest element's pattern (`[a, ...[b = "B"]]`, `|...[c = "C"]|`) is never walked: DOM reads `$pattern[1]` with no fallback, and HTML for a `<const>` aliasing a binding loses the element in `translateVar` › `removeUndeclared` and throws `ReferenceError: b is not defined`. Fix it as one class, with a fixture per case (`<let>`, `input` and closure reads; a rest pattern in `<const>` and in params): also lower defaults inside a rest element's argument, and count each attribute tag loop param default as part of what its params derive from, beside the attributes, so no default that reaches analysis is ignored.

Check: with `tags/list.marko` = `<for|item| of=input.item><p>${item.label}</p></for>`, `pnpm run compile -- -o dom -d` on `<let/fallback="none"/><button onClick() { fallback = "x" }/><list><for|label = fallback| of=[undefined, "given"]><@item label=label/></for></list>` emits `/* fallback */"none";` in `$setup` and `(label = $scope.fallback) =>`. With `<for|label = input.fallback| of=input.list>`, `$input` calls `$input_fallback`, which the module never declares. `<let/list=["a"]/><button onClick() { list = ["c"] }/><const/[a, ...[b = "B"]]=list/><div>${a} ${b}</div>` emits `const [a] = list;` and then reads `b` under `-o html`, and `$b($scope, $scope.list[1])` under `-o dom`.
