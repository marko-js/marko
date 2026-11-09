---
"@marko/runtime-tags": patch
---

Fix a `<for>` whose bound or list reads several values, or a child tag's returned value, updating its rows before it adds or removes them: rows it was about to remove were updated with the new values first, which threw where a row read by index (`${input.items[i].name}` after `input.items` shrank) and rewrote a removed row's selected state. Rows now update after the loop settles them.
