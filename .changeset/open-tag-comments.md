---
"@marko/compiler": patch
---

Keep the comments inside an open tag in source output, which were deleted before. Each is printed before the attribute after it, or after the last one, and a comma follows a value that a comment comes after, so the comment is not read as part of it.
