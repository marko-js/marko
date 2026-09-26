---
"@marko/runtime-tags": patch
---

Fix server-rendered `<for>` and `<if>` content that removed the wrong nodes after resume. A branch whose content is only a `${}` or `$!{}` placeholder now resumes as a range, so removing it no longer takes a neighboring element or text with it, or leaves part of its unescaped HTML behind. A single-element loop item that streamed in across several flushes now removes its element instead of only a resume comment.
