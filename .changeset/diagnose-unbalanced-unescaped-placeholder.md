---
"@marko/runtime-tags": patch
---

Report in development when a resumed unescaped placeholder (`$!{}`) rendered HTML that is not a balanced fragment, such as a truncated excerpt with an unclosed tag, since updating it would remove the wrong nodes.
