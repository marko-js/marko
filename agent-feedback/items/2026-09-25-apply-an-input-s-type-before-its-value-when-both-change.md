---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › getInputTypeWriter
---

# Apply an input's `type` before its `value` when both change

An `<input>` applies its `value` by its current `type`, so a dynamic `type` is written first, in the same write as the value, through `controllable.ts › _attr_input_type`: `getInputTypeWriter` picks the spread that claims the value (`_controllable_input`), the value's controllable, or the `value` attr. Three spread shapes still write them apart, so the input keeps a stale live value, or the browser's copy of typed text into the `value` attribute when the type turns attribute-backed:

- a spread that drops `type`: `dom.ts › _attrs` removes it before the claim, so the live value resets from the old `value` attribute and `_attr_input_value_default` keeps it;
- a spread `type` with a complete static `value:=` after it: the spread and `_attr_input_value` are separate Signals, so the value can apply under the old type's sanitization;
- a dynamic `type` after a spread that supplies the value while a complete static `checked:=` keeps the spread from claiming it: the spread's attr loop writes the value and the `type` is written alone.

Direction: run the claim before `_attrs` removes stale attrs, so `_attr_input_type` sees a dropped `type`; and when a complete static controllable splits the `type` and the value across a spread, fold the static half into the spread.

Check: fixtures (`skip_ssr: true` except the second), where a fresh render gives the new value:

- `<input ...input.full/>`, steps `[{ full: { type: "checkbox", value: "a" } }, { full: { value: "x" } }]`: `render.debug.md` shows `default-value="x" value="a"`.
- `<let/value="5"/>` `<let/type="number"/>` `<const/attrs={ type }/>` `<input ...attrs value:=value/>` `<button onClick() { type = "text"; value = "abc" }/>`, steps `[{}, click the button]`: `render.debug.md` shows `default-value="5"` and no live value.
- `<let/checked=false/>` `<input ...input.attrs type=input.t checked:=checked/>`, steps `[{ t: "text", attrs: { value: "y" } }, set the input's value to "typed", { t: "checkbox", attrs: { value: "y" } }]`: `render.debug.md` shows `value="typed"`.
