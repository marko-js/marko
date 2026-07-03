---
"@marko/runtime-tags": patch
---

Update renders no longer serialize client-resume-only wiring: controlled
input scopes, tag-variable refs/scope offsets, closest-branch backrefs, and
tag-variable change handlers are all resume artifacts -- matched scopes keep
their live wiring and fresh branches wire their own from registered
content. Measured on the ecommerce prototype this cuts update payloads by
roughly a third.
