---
"@marko/runtime-tags": patch
---

A `<select>` controlled by `value`/`valueChange` re-asserts its value when the options it renders change their own `value`s: a keyed `<for>` that swaps two option values now moves the selection to the option holding the controlled value, where the select used to keep showing the option that matched before the swap. It restores the value itself rather than reporting the change, so a swap is not handed to `valueChange` as a pick the user never made.
