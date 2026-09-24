---
"@marko/runtime-tags": patch
---

An `<await|result|=promise>` whose `result` is never read no longer reads a variable that was never declared, which threw `is not defined` in the browser, or in the server render when `promise` came from a `<let>`. An `<id/unused=value/>` whose variable is never read no longer breaks the browser compile, or throws `is not defined` in the browser when it sits beside other setup content or inside a `<for>`.
