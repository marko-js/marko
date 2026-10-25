---
"@marko/runtime-tags": patch
---

A branch the client creates (an `<if>` or `<for>` body, a dynamic tag, an `<await>` body) runs its setup as it is created, before the values it receives, as a template does when it mounts; a `<try>` or `@catch` body still sets up in the queue, before its values, so an error it throws reaches the right `<try>`. A new row is built whole before it is inserted, a tag's variable reaches the tags after it once they are set up, and an error thrown while an `@catch` body renders its error reaches the enclosing `<try>` instead of escaping it. A loop row that throws while rendering no longer leaves the loop unable to update, and a class component rendering content from a tags `<for>` attribute tag gets the new loop values when they change.
