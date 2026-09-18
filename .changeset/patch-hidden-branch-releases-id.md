---
"@marko/runtime-tags": patch
---

Fix a patch navigation falling back to a document load when a hidden `<if>` stands before other content: a branch that renders nothing now consumes the scope id it reserved, so no later scope inherits its patch link.
