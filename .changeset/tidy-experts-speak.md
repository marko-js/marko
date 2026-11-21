---
"@marko/runtime-tags": patch
---

Fix dynamic tag names typed wrongly from a named import of a template or a number beside a template. A tag name that is a hoisted `<const>` whose value is certainly not a function (`<${Tag}/>` above `<const/Tag=Child/>`) no longer compiles: it read the value from outside the tag that declares it, so it rendered even where that tag did not. A native tag's event or change handler that is certainly a truthy value other than a function (`onClick=(input.x ? "a" : "b")`, `onClick=("alert" + input.y)`, or a `<const>` holding a string) no longer compiles.
