---
"@marko/runtime-tags": patch
---

Keep camelCase attributes written beside a spread, such as `<div ...attrs tabIndex=0 readOnly>`, when the spread renders or updates in the browser. The browser reports these names lowercased, so they were removed on mount and on the first update after the page resumed.
