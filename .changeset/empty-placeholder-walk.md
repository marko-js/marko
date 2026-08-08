---
"@marko/runtime-tags": patch
---

Fix a client-side crash or destroyed sibling elements when a template contains a placeholder that statically evaluates to an empty string (e.g. `${""}` or `${NaN}`): it rendered no text but still claimed a walk step, shifting every later step in the section by one.
