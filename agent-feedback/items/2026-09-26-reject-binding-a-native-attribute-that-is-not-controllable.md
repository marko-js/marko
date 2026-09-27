---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts › normalizeTag
---

# Reject binding a native attribute that is not controllable at compile time

`normalizeTag` turns any bound attribute into a value plus a `<name>Change` handler, but a native tag consumes a change handler only for its controllable attributes (`value`, `checked`, `checkedValue`, `open`). For any other attribute, such as `<div foo:=x/>` or `<svg><use xlink:href:=x/></svg>` with `x` from a `<let>`, the handler reaches `_attr` as a function: debug throws at render ("The `fooChange` attribute cannot be a function…") and an optimized build writes the handler's source as an attribute value. `assertNativeAttrValueType` in `visitors/tag/native-tag.ts` skips every `*Change` name, so nothing catches it at compile time. Raise a compile error naming the attribute when a native tag binds one that has no controllable, with an `error_compiler` fixture.

Check: `pnpm run compile -- -o html` on `<let/x="a"/>` + newline + `<div foo:=x/>` compiles and emits `_attr("fooChange", _resume(_new_x => { x = _new_x; }, …))`.
