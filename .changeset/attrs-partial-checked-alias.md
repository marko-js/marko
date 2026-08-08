---
"@marko/runtime-tags": patch
---

A checkbox controlled through a spread `checkedValue` alongside static attributes no longer unchecks when unrelated state updates; the stale-attribute removal now recognizes `checkedValue` as owning `checked`, matching full spreads.
