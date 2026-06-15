---
"@marko/runtime-tags": patch
---

Fix serialization of a known child's scope when it receives a reactive value through a `...rest` destructure that is forwarded to descendants. The parent now propagates a serialize reason for the rest binding, so the child (and its descendants) resume correctly instead of crashing on the first hydrated update.
