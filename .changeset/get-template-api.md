---
"@marko/compiler": minor
---

Add a `getTemplateApi(filename, translator?)` API that reports whether a
template uses the Tags API (`"tags"`) or the Class API (`"class"`).

For the Tags API translator this resolves synchronously. For the interop
(Class API) translator it mirrors the compiler's own detection but avoids a
full compile where possible: it first checks the file name (`tags/`
directory), then the taglib lookup, and only parses the template (skipping the
transform/translate phases) as a last resort.
