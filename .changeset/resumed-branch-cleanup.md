---
"@marko/runtime-tags": patch
---

Fix cleanup on a resumed page when a `<for>` or `<if>` removes content that has no resume marker of its own, such as a child tag's static `<for>` rows, or a tag whose content is only another tag: removing it now aborts its `$signal`, runs its `onDestroy` and stops its updates, as a client render does.
