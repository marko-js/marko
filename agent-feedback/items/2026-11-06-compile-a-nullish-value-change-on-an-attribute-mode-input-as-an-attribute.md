---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › getRelatedControllable
---

# Compile a nullish `valueChange` on an attribute-mode `<input>` as a plain attribute

On an `<input>` whose static `type` keeps `value` as an attribute (`checkbox`, `radio`, `hidden`, `button`, …), `valueChange` can only be a static nullish value; anything else is a compile error. Yet such an input still compiles to the controllable path: `_attr_input_value(…, null, _attr_input_value_attribute_default)` plus an `_attr_input_value_script` registered in setup, which does nothing a plain `_attr(…, "value", …)` would not. Compile it as the attribute it is; that may leave `_attr_input_value_attribute_default` and the `"attribute"` value mode without callers.

Check: `pnpm run compile -- -o dom` on `<let/v="a"/><input valueChange=null type="checkbox" value=v/><button onClick() { v += "b" }/>` imports `_attr_input_value`, `_attr_input_value_script` and `_script`; without `valueChange=null` it is a plain `_attr`.
