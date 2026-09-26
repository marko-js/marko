---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/controllable.ts › _attr_details_or_dialog_open_script
---

# Stop reporting `showModal()` as a controlled dialog's openChange

The markojs.com native-tag docs say calling `.showModal()` "will _not_ cause `openChange` to fire", but on `<dialog open:=show>` the MutationObserver in `_attr_details_or_dialog_open_script` sees the `open` attribute that `showModal()` adds, sets `el.open = false` (closing the modal), calls `openChange(true)`, and the resulting render sets `open` through the property. Per the HTML spec that reopens the dialog non-modally, so an app that follows the docs loses the modal's top layer and inertness. Direction: skip the report for a modal dialog (`el.matches(":modal")`), or report it without reverting; if the current behavior is kept, the docs must say to set the bound state instead of calling `showModal()`.

Check: jsdom has no `showModal`, so stand in with the attribute it adds: fixture `template.marko` = `<let/show=false/>` `<dialog/dlg open:=show>hi</dialog>` `<button onClick() { dlg().setAttribute("open", "") }/>` `<p>${String(show)}</p>`, steps `[{}, async (d) => { d.querySelector("button")!.click(); await new Promise((r) => setTimeout(r, 10)); }]`: `render.debug.md` logs `dialog[open]` being rewritten after the click and `<p>` changing to `true`, i.e. openChange fired and the runtime reset `open` itself.
