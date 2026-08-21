---
"@marko/runtime-tags": patch
---

Fix content sections passed through another tag's body parameter resolving serialization from the child template's raw analysis: serialize reasons now dereference through the call site's expressions, fixing `Unable to serialize "input.<attrTag>" (reading content)` errors and dropping serialized data and registered renderers that were never needed.
