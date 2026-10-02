---
"@marko/runtime-tags": patch
---

Stop rendering a `<try>` body past an error thrown in lazily loaded content, or in a nested `<try>` without a `@catch`. The rest of the body no longer streams next to the `@catch`, and the render no longer fails with `Invalid value used as weak map key` or stalls without ever showing the `@catch`.
