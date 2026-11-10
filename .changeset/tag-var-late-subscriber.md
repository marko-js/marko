---
"@marko/runtime-tags": patch
---

Content that reads a tag variable and resumes after the tag that declares it, such as an `<await>` body behind a `@placeholder` or content in nested lazy tags, now shows the value the child's `<return>` changed it to on the client before that content arrived, where it showed the server's value and missed the change. In `<for>` rows inside nested lazy tags, a debug render no longer throws "Unable to serialize a value shared between independently lazy loaded content" and an optimized one no longer drops a later row's update.
