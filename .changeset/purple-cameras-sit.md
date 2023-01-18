---
"marko": patch
"@marko/compiler": patch
"@marko/translator-default": patch
---

Fix an issue where merging scripts (via the out.script api) was not properly inserting delimeters when scripts are added in different async writers.
