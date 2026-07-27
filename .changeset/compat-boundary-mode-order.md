---
"@marko/runtime-tags": patch
"@marko/runtime-class": patch
---

Stop a Class-API component rendered at both an inert and an updating call site from inheriting the first call site's `"preserve"` boundary mode, which left the updating one serialized as a component that never re-renders in the browser.
