---
"@marko/runtime-tags": patch
---

Fix values lost on resume when a template or `<define>` renders itself, or reads the tag variables of several calls to one `<define>`: content an outer instance passes down reads the outer instance's values, and a tag variable no longer takes another instance's state for its own.
