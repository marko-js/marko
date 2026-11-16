---
"@marko/runtime-tags": patch
---

Keep the html runtime's generator patch out of the translator, so loading the compiler no longer replaces `next` on every generator in the build process.
