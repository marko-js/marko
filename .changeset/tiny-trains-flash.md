---
"@marko/runtime-tags": patch
---

On a page with Class API components, a dynamic tag given data that has a renderer's key, such as an `id` property in a development build (a Class API attribute tag with an `id` attribute forwarded to a Tags child), no longer mistakes it for a template and fails; it renders the body as for any other non-template value.
