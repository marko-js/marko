---
"@marko/runtime-tags": patch
---

Collapse value signals that only forward their scope and value to another signal (`(scope, value) => fn(scope, value)`) down to the target signal itself, removing the redundant wrapper closure from the generated output.
