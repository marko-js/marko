---
"@marko/runtime-tags": patch
---

Harden the resume walker against user comments that merely start with the runtime marker prefix (e.g. an `<html-comment>` beginning with `M_`). Such comments were registered as markers and pushed into the visit list, which could corrupt hydration. The walker now requires a well-formed marker: the prefix followed by a known op character whose id starts with a digit, `^`, or is empty.
