---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/controllable.ts › _attr_select_value_script
---

# Resync a controlled select when its option values change

A controlled select with a constant value keeps its old selected option when existing option nodes change their values. `_attr_select_value_script` observes child-list mutations but not option `value` attribute changes, and a constant select value has no signal those changes trigger. A select bound to `"b"` whose two keyed options swap values therefore shows `"a"`, while a fresh render selects `"b"`. Resync the select when an option's `value` changes, or tie option value updates into its existing reconciliation.

Check: a fixture `<select value="b" valueChange() {}><for|option| of=input.options by="id"><option value=option.value>${option.value}</option></for></select>` with steps `{ options: [{ id: 1, value: "a" }, { id: 2, value: "b" }] }`, then `{ options: [{ id: 1, value: "b" }, { id: 2, value: "a" }] }`, then a step asserting `document.querySelector("select").value === "b"`, fails in CSR on main.
