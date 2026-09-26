---
"@marko/runtime-tags": patch
---

Fix a `<try>` `@placeholder` flashing its content and then showing again on the client when an `<await>` settles and its content, or the `@catch` content its rejection renders, starts another `<await>`. The placeholder now ends only once the renders of the settling update have run, so it stays up until the nested value settles, and resolved content no longer shows before it has finished rendering.
