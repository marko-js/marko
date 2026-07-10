---
"@marko/runtime-tags": patch
---

Report a compile error when an `<option>` nested within a `<select>` that has a `value` attribute is missing its own `value` attribute or uses `selected`. The select's `value` only matches options by their `value` attributes, so these silently rendered with no selection applied.
