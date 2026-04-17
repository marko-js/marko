---
"marko": patch
"@marko/runtime-tags": patch
---

Fix escaping for `<html-comment>` tag.
Previously this tag relied on normal xml escaping which looks for `<`.
This PR updates to have a special escape for `<html-comment>` tags that replaces `>` instead.

```marko
// Previously incorrectly escaped.
<html-comment>${">Uh oh"}</html-comment>
```
