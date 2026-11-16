---
"@marko/runtime-tags": patch
---

The deprecated `<attrs>` and `<effect>` tags no longer make an interop template Tags API: a template whose only Tags API sign was one of them is now Class API, which has neither tag (mark it `<!-- use tags -->` or move it into a `tags/` directory).
