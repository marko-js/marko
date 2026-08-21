---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/controllable.ts › _attr_details_or_dialog_open_script
---

# Close a modal `<dialog>` with `close()` instead of clearing its `open` property

Every controllable-open path writes the `open` property directly — `_attr_details_or_dialog_open_default` does `scope[nodeAccessor].open = isNotVoid(open)` and the `_attr_details_or_dialog_open_script` MutationObserver reverts a change with `el.open = !newValue`. Clearing `open` does not take a dialog out of the top layer in Chromium: the box disappears and `dialog.open` reads `false`, but `dialog.matches(":modal")` stays `true`, so the rest of the document stays inert and every later `.focus()` is a silent no-op. It reaches a plain template — a `<dialog>` carrying only an `openChange` handler, opened by the app's own `showModal()`, is left permanently modal after its close button runs, while the same template without `openChange` closes correctly. It also disarms the app's own recovery, because a `<script>` effect guarding on `if (node.open) node.close()` runs after the property write and sees `false`. There is no error, no console message and no visual cue. Drive the element through `close()`/`show()` (`showModal()` where the element is already in the top layer) rather than the reflected property.

Check: in a browser, render `<let/open=false><button onClick(){open=true}>o</button><dialog/el openChange(v){open=v}><button onClick(){open=false}>c</button></dialog>` plus a `<script>` that calls `el().showModal()` when `open` and `el().close()` otherwise; click open then close. `dialog.matches(":modal")` is `true` after the close and `opener.focus()` leaves `document.activeElement` at `BODY`; dropping `openChange` from the same template gives `:modal === false`. Expect both to end unmodal with focus restorable.
