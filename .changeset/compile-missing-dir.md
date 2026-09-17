---
"@marko/runtime-tags": patch
"marko": patch
---

Compiling an in-memory source whose filename names a directory that does not exist no longer throws `ENOENT`; the sibling style/component lookup treats an unreadable directory as having no files.
