---
"@marko/runtime-tags": patch
---

Stop markup preceding a controlled `<select>` from being rendered inside its content. Any `<option value>` in that markup — an earlier uncontrolled `<select>`, an `<optgroup>`, a `<datalist>` — was marked `selected` against the controlled select's value on the server, which the client never did.
