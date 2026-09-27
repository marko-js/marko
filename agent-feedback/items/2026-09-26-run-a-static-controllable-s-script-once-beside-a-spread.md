---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/dom/dom.ts › _attrs_script
---

# Run a static controllable's script once beside a spread

When a complete static controllable follows a spread (`<input ...attrs value:=v/>`), the spread gets no claim, but `_attrs_script` still runs `controllableScripts[scope[ControlledType + accessor]]`, and the static `_attr_input_value` set that slot. So the owner's `_attr_input_value_script` runs again from the spread's effect on creation and on every spread update. Listeners stay single (`syncControllableFormInput` overwrites `el._`), but the work is redundant and a client render logs the debug `valueChange`-on-checkable error twice. Direction: run the table only for a spread that claims the controllable, the same condition `attrsInternal` uses to reset the slots.

Check: fixture `controllable-checkbox-value-binding`: `render-csr.debug.md` has two `type=\"checkbox\"` errors for `<input ...input.attrs value:=s/>` (the last two `ERROR` lines), while `render-ssr.debug.md` has one.
