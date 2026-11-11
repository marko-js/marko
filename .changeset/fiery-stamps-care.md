---
"@marko/compiler": patch
---

A taglib lookup's `getTag` no longer throws for a tag that fails to load (a `marko.json` entry or `marko-tag.json` that cannot be read, or a missing template), which since 5.43 broke tools reading a project with one such tag. The tag is not found and the lookup keeps why (`getTagError`). Compiling a template that uses the tag still fails, now with the error at the tag's name, and with `errorRecovery` it is one of the template's diagnostics. A `buildLookup` given an `onError` whose directory's taglibs fail to load (eg a `taglib-imports` entry that does not resolve) now returns the tags of the closest directory above that does load, rather than only the built in ones.
