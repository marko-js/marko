---
"@marko/runtime-tags": patch
---

Stop materializing boundary nodes around `if`/`for`/dynamic tag content: client
rendered templates no longer pad the ends of a template or branch body, and
resuming a server rendered branch now adopts its real edge nodes instead of
keeping the start comment and inserting a text node.
