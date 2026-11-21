---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts › getObjectSpreadAttrs
---

# Add a value kind for an object's known keys so a spread of a `<const>` object compiles to attributes

`getObjectSpreadAttrs` writes each property of an object literal spread in place as its own attribute (the `native-tag-spread-content-object-literal` fixture writes `data-kind=pick` into `$template`), but the same literal named through a `<const>` is `KIND_OBJECT` and nothing more, so the spread stays a runtime `_attrs_content` with an `_attrs_script` effect registered for resume, and every change re-spreads the whole object. A kind holding the object's known keys, each with its own kind, would let the spread split as the literal does, where nothing writes into the object. The same record would give a rest pattern an honest kind: `getPatternKind`'s `RestElement` arm reads `...rest` as `getMemberKind(kind, undefined)`, which for a param is kinds 0 with the param marked within, and for an object literal is unknown, though a rest is always a fresh object holding the other keys. This is a real addition, not a bit: a record per key, and a reader that rewrites the spread.

Check: `pnpm run compile -- -o dom -d` on `<const/attrs={ class: "a", title: input.title }/><div ...attrs/>` emits `_attrs_content($scope, "#div/0", $scope.attrs)` and `_script(…, $scope => _attrs_script($scope, "#div/0"))`; on `<div ...{ class: "a", title: input.title }/>` it writes `<div class=a>` into `$template` and one `_attr(…, "title", input_title)`.
