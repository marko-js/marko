---
"@marko/runtime-tags": patch
---

In development, report a controlled `<select multiple>` whose bound value holds any value without a matching `<option>`, not only one where none match. A bound select or checkbox group value holds only values a rendered option or checkbox has, since resume rebuilds it from the page.
