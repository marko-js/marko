---
"@marko/runtime-tags": patch
---

Fix static `-->` inside `<html-comment>` being written unescaped: SSR markup closed the comment early (leaking the rest as visible text) and the client template parsed into extra nodes, crashing hydration walks. Static comment text now gets `_escape_comment`'s transform at compile time in both output targets.
