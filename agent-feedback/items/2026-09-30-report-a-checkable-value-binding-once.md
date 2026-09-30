---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/dom/controllable.ts › _attr_input_value
---

# Report a value binding on a checkable input once

When an `<input>`'s `type` is already set before `_attr_input_value` runs (as when both come through a spread or from a parent), the render-time check and the mount effect `_attr_input_value_script` both call `assertNoValueBindingOnCheckable`, so every debug ERROR prints twice. Run the render-time check only on updates, since the mount effect checks once all attributes landed.

Check: a fixture `<let/t="checkbox"/><let/v="a"/><input type=t value:=v/>` with `skip_optimize`, `equivalent: false` and steps `[{}]`: `render-csr.md` logs the ERROR twice and `render-ssr.md` once.
