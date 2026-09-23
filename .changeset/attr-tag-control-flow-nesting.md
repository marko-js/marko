---
"@marko/runtime-tags": patch
---

An attribute tag `<for>` nested within an attribute tag `<if>`, `<else-if>` or `<else>` now passes every attribute tag it repeats, instead of only the last.
An attribute tag `<if>` chain whose branches hold different attribute tags now passes each branch's attribute tags on the client, instead of dropping them or failing to compile when the child reads only some of them.
`<@catch>` and `<@placeholder>` content created by an attribute tag `<for>` now receives the loop's params when a `<try>` renders it on the client, instead of rendering without them.
Content an attribute tag `<for>` creates now keeps the loop's params when the client first renders it after resume (a child opening a list, rendering a saved item or showing a `<@catch>`), instead of rendering them empty.
