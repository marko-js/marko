---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/controllable.ts › syncControllableFormInput
---

# Run controllable sync before delegated `onInput` handlers

`syncControllableFormInput` delegates `input` to `handleChange`, and `event.ts › _on` delegates it to `handleDelegated`, as two separate document capture listeners that run in registration order. Whether an element's `onInput` reads the bound value before or after its `valueChange` has stored the new one therefore depends on whether some unrelated element's `onInput` Effect registered first. Direction: dispatch both through one listener, or have `handleDelegated` run the target's `el._` before walking handlers, so the Controllable always syncs first.

Check: fixture `template.marko` = `<let/q=""/>` `<input.ctrl value:=q onInput() { console.log("q=" + q) }/>`, step `(d) => { const el = d.querySelector("input.ctrl")!; el.value = "x"; el.dispatchEvent(new d.defaultView!.Event("input", { bubbles: true })); }`: the Console logs `q=x`; adding `<input.first onInput() {}/>` before it makes the same step log `q=`.
