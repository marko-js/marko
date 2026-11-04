---
"@marko/runtime-tags": patch
---

Render a template that imports itself (`import Self from "./self.marko"`) on the server by calling its own content, as it already does when the tag is used by its file name, instead of through its import of itself.
