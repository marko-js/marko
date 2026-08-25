---
"@marko/runtime-tags": patch
---

Fix `<if>`/`<for>` as the only child of a custom tag whose name shadows a native element (eg `tags/menu.marko`) borrowing that tag's node marker; the content crashed when re-rendered on the client because the marker lives in the parent's scope.
