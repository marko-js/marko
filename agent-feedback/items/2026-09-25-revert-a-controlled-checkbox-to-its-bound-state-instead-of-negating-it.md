---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/controllable.ts › _attr_input_checked_script
---

# Revert a controlled checkbox to its bound state instead of negating it

`_attr_input_checked_script`, and the non-radio arm of `_attr_input_checkedValue_script`, treat every `input` event as a toggle: they report `el.checked` and set `el.checked = !el.checked` before calling the change handler. An `input` event that did not toggle the box (testing-library's `fireEvent.input`, a script's `dispatchEvent`) flips `<input type=checkbox checked:=on>` to unchecked while `on` stays true, and since `checkedChange(true)` is a no-op write, no render restores it. From then on each real click is reverted as well, so the box stays stuck opposite its state. Direction: keep the bound checked state in `ControlledValue` and revert to it, skipping the handler when `el.checked` already matches, as the value and select Controllables do.

Check: fixture `template.marko` = `<let/on=true/>` `<input type="checkbox" checked:=on/>` `<p>${String(on)}</p>`, `equivalent: false`, steps `[{}, (d) => { const el = d.querySelector("input")!; el.dispatchEvent(new d.defaultView!.Event("input", { bubbles: true })); el.setAttribute("data-live-checked", String(el.checked)); }, (d) => { const el = d.querySelector("input")!; el.click(); el.setAttribute("data-live-checked", String(el.checked)); }]`: `render-csr.debug.md` shows `data-live-checked="false"` after both steps while `<p>` stays `true`.
