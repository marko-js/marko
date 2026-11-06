---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › getRelatedControllable
---

# Count a first-attribute `valueChange` on an attribute-mode `<input>`

On an `<input>` whose static `type` keeps `value` as an attribute (`checkbox`, `radio`, `hidden`, `button`, …), `getRelatedControllable` skips the controllable when `!indexByName.valueChange`. That test is also true when `valueChange` is attribute 0, so the output depends on attribute order. `<input valueChange=null type="checkbox" value=x/>` compiles to a plain `_attr(…, "value", …)`, while `<input type="checkbox" value=x valueChange=null/>` compiles to `_attr_input_value(…, null, _attr_input_value_attribute_default)`. Only a static nullish `valueChange` reaches this branch, since any other value on these types is a compile error. Test `indexByName.valueChange === undefined` (or use `in`, as the checks around it do).

Check: `pnpm run compile -- -o dom` on `<let/x="a"/><input valueChange=null type="checkbox" value=x/><button onClick() { x += "b" }/>` imports `_attr`; moving `valueChange=null` after `value=x` imports `_attr_input_value`.
