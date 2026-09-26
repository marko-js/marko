---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › htmlSelectArgs
---

# Claim a spread `<select>`/`<textarea>` value in SSR only when the spread has one

For `<select ...attrs>` and `<textarea ...attrs>` the HTML translate step always passes `$select_input.value`/`$textarea_input.value` (and `valueChange`) to `_attr_select_value`/`_attr_textarea_value`, while the DOM (`dom/controllable.ts`) and the server dynamic tag (`html/dynamic-tag.ts › _dynamic_tag`) claim the value only when `"value" in attrs || "valueChange" in attrs`. So a spread without `value` normalizes to `""` on the server and selects a `value=""` option, while the client keeps the browser's default selection; and a `null`/`undefined` spread, which `_attrs` otherwise accepts, throws during SSR. Direction: make the claim in the HTML runtime with the DOM's `in` test, as `_dynamic_tag` already does, and drop the translator's member-expression branches for spreads.

Check: fixture `<select ...input.a><option value="one">one</option><option value="">empty</option></select>` with `equivalent: false` and `steps: [{ a: { name: "x" } }]`: `render-ssr.debug.md` marks the `value=""` option `selected`, `render-csr.debug.md` the `one` option. With `steps: [{ a: null }]` the ssr modes throw `Cannot read properties of null (reading 'value')`.
