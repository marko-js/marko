---
"@marko/runtime-tags": patch
---

Report a compile error when module level code, a `static`, `server`, `client` or `export` statement, references a name that exists only while the template renders: a tag variable or parameter, `input`, `$global` or `$signal`. Such code runs once as the template loads, so `export { count }` for a `<let/count>`, or a static function reading or assigning it, used to compile and then fail when the module loaded or the function ran.
