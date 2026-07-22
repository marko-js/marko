---
"@marko/runtime-tags": patch
---

Restore a two-way-bound radio group (`checkedValue:=`) to its default member on a native form reset, instead of clobbering the bound value to `undefined`. On reset the fired handler now adopts the group's reset-restored default rather than the firing (unchecked) radio's value.
