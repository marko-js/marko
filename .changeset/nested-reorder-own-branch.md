---
"@marko/runtime-tags": patch
---

Resume content that streams into an `<await>` within a branch of a reordered `<try>` body, such as one under an `<if>`, inside that branch instead of the `<try>`'s, so removing the branch also stops its effects.
