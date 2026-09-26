---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/controllable.ts › _attr_input_checkedValue_script
---

# Serialize the bound checkedValue array instead of rebuilding it on resume

On resume `_attr_input_checkedValue_script` rebuilds a checkbox group's bound array by pushing `el.value` for each `defaultChecked` checkbox into the shared `[]` SSR sends. Any bound value with no rendered checkbox (a filtered or paged list) is lost, so the first toggle after resume reports a list without it and the change handler overwrites the state. CSR keeps the real array in `ControlledValue` (`_attr_input_checkedValue`). Direction: serialize the normalized bound array through the shared reference so resume starts from the server's value instead of reconstructing it from the DOM.

Check: fixture `template.marko` = `<let/list=["a", "z"]/>` `<for|v| of=["a", "b"]><input type="checkbox" value=v checkedValue:=list/></for>` `<p>${list.join(",")}</p>`, `equivalent: false`, steps `[{}, (d) => d.querySelector("input[value=b]")!.click()]`: `render-csr.debug.md` shows `a,z,b` and `render-ssr.debug.md` shows `a,b`.
