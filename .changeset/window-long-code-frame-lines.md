---
"@marko/compiler": patch
---

Window a compile error's code frame around the error column when a framed line is longer than 160 characters, so a long line (an inlined data URI, generated markup) no longer makes the error message grow with the source. The label still follows the markers, and the reported line and column are unchanged.
