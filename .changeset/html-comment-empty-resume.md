---
"@marko/runtime-tags": patch
"marko": patch
---

Fix a resumable `<html-comment>` whose body serializes empty (e.g. `<html-comment>${value}</html-comment>` with an empty `value`) resuming as a stray text node instead of the comment. On the client an empty comment is indistinguishable from a separator marker, so a later update rendered as visible text rather than into the comment. Such a comment is now padded with a space during SSR so its resume marker claims the comment node.
