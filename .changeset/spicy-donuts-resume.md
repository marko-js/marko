---
"@marko/runtime-tags": patch
"marko": patch
---

Fix hydration when the Class runtime initializes before the Tags runtime: a class component rerendering in the browser now forces the tags runtime to resume first, so revived content (`input.renderBody`) and existing tags branches are found instead of crashing with `Invalid dynamic tag value` or discarding server-rendered DOM.
