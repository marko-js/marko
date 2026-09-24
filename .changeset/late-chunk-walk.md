---
"@marko/runtime-tags": patch
---

Content streamed in order after the page resumed is walked even when its chunk carries no resume data, so later client updates reach it.
