---
"@marko/runtime-tags": patch
---

Fix scripts and event handlers staying unrun on resume when a lazily loaded tag nested in another lazily loaded tag renders content, a template or a function its parent passes it, and its module loads before the parent's.
