---
"@marko/runtime-tags": patch
---

Resume-only pages containing a dynamic native tag with spread attributes no longer crash during hydration: `_resume_dynamic_tag` now enables branch visit processing, which the bundler could previously tree-shake away along with `_dynamic_tag`.
