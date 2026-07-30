---
"@marko/runtime-tags": patch
---

Fix closure subscriptions adopted from a server render never being removed from their owner's set when the subscribing scope is destroyed.
