---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/dom/controllable.ts › _attr_input_value_dynamic_default
---

# Apply an input's `type` before its `value` when both change

`_attr_input_value_dynamic_default` chooses between the attribute path and the `defaultValue` path from the live `el.type`, but the `type` write does not reliably come first: separate `value=`/`type=` attributes update from separate Signals (for `input.v`/`input.t` the value Signal runs first whichever attribute is written first), and `dom.ts › attrsInternal` runs a spread's `controllable` claim before its attribute loop sets `type`. When one update turns a text input into a checkbox and sets a new value, the value goes through the text path, which keeps the old live value, and the browser copies that old value into the `value` attribute when the type switches, so the checkbox ends up with the previous value. Direction: apply a changed `type` before the value (order the writes in the translator and set `type` ahead of the claim in `attrsInternal`), or have the `type` write re-apply the value.

Check: fixture `template.marko` = `<input.a value=input.v type=input.t/>` `<input.b ...input.attrs/>` `<input.c type=input.t value=input.v/>`, `skip_ssr: true`, steps `[{ t: "text", v: "a", attrs: { type: "text", value: "a" } }, { t: "checkbox", v: "x", attrs: { type: "checkbox", value: "x" } }]`: `render.debug.md` shows all three inputs as `type="checkbox" value="a"`, where a fresh render gives `value="x"`.
