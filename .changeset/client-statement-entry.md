---
"@marko/runtime-tags": patch
---

Page entries now link the topmost templates with client work instead of the root-most template, and only pull in and initialize the resume runtime when something actually resumes; a page whose only client code is static `client {}` statements just loads its modules.
