---
"@marko/runtime-tags": patch
---

Call the change handler when assigning a name destructured from a property another destructure also declares, such as `b` in `<const/{ a }=input>` beside `<const/{ a: b }=input>`. The second name is read as the first, so assigning it now assigns the first, where it used to compile to a value that went nowhere. A property destructured by a string key, such as `"my-key"`, also no longer produces an invalid server destructure for its change handler.
