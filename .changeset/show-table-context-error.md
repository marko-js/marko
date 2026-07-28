---
"@marko/runtime-tags": patch
---

Report a compile error when a `<show>` is a direct child of a table or select element, where its hidden-content wrapper was discarded by the HTML parser and the content rendered instead of being hidden.
