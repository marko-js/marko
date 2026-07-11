---
"@marko/runtime-tags": patch
---

Reads recorded after their owning expression was merged into another
node's extra (eg a `$global` read tracked at identifier-visit time after
an `<if>`'s analyze merged its test into the tag's extra) now land on the
merge target instead of splitting the expression's references.
