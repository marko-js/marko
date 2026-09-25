---
"@marko/runtime-tags": patch
---

Compile an unread `<const>`, `<id>` or `<let>` whose value is bare `$global` or `$signal` for the client. It used to fail with "Marko internal error: analysis marked this template's setup export as empty but translation produced statements for it", or leave the dropped value in setup when the template had other setup work. The server render no longer evaluates an unread `<const/s=$signal/>` either, which used to throw "Cannot use $signal in a server render."
