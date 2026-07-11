---
"@marko/runtime-tags": patch
---

Two guided diagnostics for mistakes that previously failed silently or with a bare runtime error. A `<let>` whose variable is never assigned and whose initializer reads reactive values now emits a compile warning ("computed once and will not update... use `<const/>`") — in observed agent-written code this was the single most common silent mistake, rendering correctly and then never updating; the check does not fire for assigned lets, controllable lets, bound attributes (`value:=`), or static initial values. Keying a `<for>` by its own loop parameter (`<for|city| of=cities by=city>`) now fails at compile time with the property-string and function forms suggested, instead of dying at render with an undefined-variable error.
