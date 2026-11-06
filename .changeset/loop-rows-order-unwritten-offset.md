---
"@marko/runtime-tags": patch
---

Fix a resumed `<for>` whose bound or list reads a child tag's returned value that cannot change in the browser (one computed from server-only input), together with state the browser changes: the child's scope offset is not written for it, so the rows' update was ordered `NaN` and could run before the loop removed rows, throwing where a row read by index or leaving a removed row's selection behind. A loop's rows update now queues like the loop's value does, in its own slot after the owner's renders, so it falls back to the owner's order the same way.
