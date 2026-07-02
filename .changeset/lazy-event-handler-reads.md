---
"@marko/runtime-tags": patch
---

Reads inside functions whose value can never be observed - native event handlers (including via spread attributes) and inputs a child template only ever invokes - no longer subscribe the expression, which previously re-created and re-attached/re-passed the function on every change. The function reads current values from the scope when invoked.
