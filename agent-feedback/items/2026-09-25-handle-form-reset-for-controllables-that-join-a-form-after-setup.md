---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/dom/controllable.ts › syncControllableFormInput
---

# Handle form reset for Controllables that join a form after setup

`syncControllableFormInput` delegates `reset` only if `el.form` is set when the setup Effect runs. A controlled input whose Effect runs while it is detached (inside a hidden `<show>` on the client) never registers it, so unless another Controllable in a form registered it first, a later form reset restores the field's default in the DOM and never reports it, leaving the field and its bound state out of sync. Direction: check for a form when the `reset` event fires rather than at setup (delegate `reset` from the first Controllable, or re-check `el.form` when the element is attached).

Check: fixture `template.marko` = `<let/visible=false/>` `<let/v="init"/>` `<button.show onClick() { visible = true }/>` `<form><show=visible><input value:=v/></show><button.reset type="reset"/></form>` `<p>${v}</p>`, `skip_ssr: true`, steps `[{}, click .show, set the input's value to "typed" and dispatch a bubbling input event, click .reset, flushRAF, (d) => { const el = d.querySelector("input")!; el.setAttribute("data-live-value", el.value); }]`: `render.debug.md` ends with the input's live value `init` while `<p>` shows `typed`; starting with `visible=true` the same steps return `<p>` to `init`.
