---
"@marko/runtime-tags": patch
"marko": patch
---

Fix a render flush landing mid-dispatch of the trusted event that scheduled it: browsers run queued microtasks between a single event's own listeners (not only after the whole dispatch finishes), so a `queueMicrotask`-deferred flush could apply a DOM write — an anchor's `href` reassigned by a click handler, say — before a later listener on that same event (a router) read it. Scheduling a flush from inside a live event dispatch now defers to a task instead, so it can't land until every listener for that event, on every node, has run.
