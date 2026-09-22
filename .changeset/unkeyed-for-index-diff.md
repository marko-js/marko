---
"@marko/runtime-tags": patch
---

A `<for>` without `by=` (`of=`, or `to=`/`until=` counting from 0 by 1) keys its branches by index, so it now compiles to a loop that only appends and removes at the end, and ships without the keyed move planner.
