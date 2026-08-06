---
"@marko/compiler": patch
---

Fix `getTagDefForTagName` tracking seen tags by name while checking by definition, which re-ran the watch file check on every call and pushed duplicate watch file entries.
