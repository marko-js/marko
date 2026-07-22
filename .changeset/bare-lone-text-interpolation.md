---
"@marko/runtime-tags": patch
---

Emit the bare value for a text-only tag or html-comment whose body is a lone dynamic interpolation (`<title>${x}</title>`), letting the text sink coerce it instead of generating a redundant `${_to_text(x)}` template wrapper.
