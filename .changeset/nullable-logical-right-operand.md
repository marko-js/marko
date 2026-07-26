---
"@marko/runtime-tags": patch
---

Stop treating `x ?? default` and `x || default` as possibly-nullish. The left operand can only be the result when it is non-nullish (`??`) or truthy (`||`), so the common default idiom `<const/opts = input.opts ?? { … }/>` no longer compiles every member read to an optional chain plus a runtime nullish check. `&&`/`&&=` keep the wider check, since their left operand can be the result.
