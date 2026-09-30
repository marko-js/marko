---
"@marko/runtime-tags": patch
---

Fix `<try>`'s `@catch` content being invisible without JS when no `@placeholder` is present and the catch fires while an earlier sibling async block is still pending. The out-of-order reorder mechanism (hidden `<t>` element + inline script) is now only used when a `@placeholder` exists on the `<try>` or an ancestor `<try>`, since that is the only case where a visible loading state needs swapping out client-side. Without one, catch content is emitted at its natural document position and requires no JS.
