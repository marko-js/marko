---
"@marko/runtime-tags": patch
---

A `<define>` body rendered only by its own tags, all passing the same constant reason for a group of its params, no longer checks that group's write guard at render time: it writes always, or never, as those calls decide.
