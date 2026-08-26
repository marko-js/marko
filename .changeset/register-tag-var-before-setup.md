---
"@marko/runtime-tags": patch
---

Fix a custom tag's returned value not reaching a later tag's variable in the browser when an earlier tag returns synchronously during setup (eg `<child/value/>` feeding `<Wrapper/wrapped=value/>`).
