---
"@marko/runtime-tags": patch
---

Fix multiple `<style>` tags of the same flavor in one template clobbering each other's CSS. Each block's virtual file now resolves to a distinct path; single-style templates are unchanged.
