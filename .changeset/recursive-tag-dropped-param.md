---
"@marko/runtime-tags": patch
---

Fix a build failure (`"$input_x" is not exported`) for a tag that renders itself and then passes an input only to a child that ignores it. The recursive call judged the input as read before that attribute was dropped, and the stale answer kept it in the tag's exported params while its signal was pruned.
