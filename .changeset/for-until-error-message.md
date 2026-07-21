---
"@marko/runtime-tags": patch
---

Include `until` in the error thrown when a `<for>` tag has no range attribute. `until` is a first-class `<for>` range (`<for until=n>`), but the message only listed `of=`, `in=`, and `to=`, hiding a valid option; it now reads `requires an of=, in=, to=, or until= attribute`.
