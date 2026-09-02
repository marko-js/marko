---
"@marko/runtime-tags": patch
---

Fix a lazily loaded tag's nested tags losing their setup when the tag also receives attributes: the DOM is now cloned in the same run as setup, so a nested `<let>` seeds and a nested `<return>` reaches the tag variable. Input chunks buffered while the module lands render with that batch instead of a frame behind it.
