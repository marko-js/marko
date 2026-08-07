---
"@marko/runtime-tags": patch
---

Debug server rendering now validates spread attributes the same way the browser runtime does: invalid attribute names error even with void values, and mutually exclusive controllable attributes split across a spread and static attributes are reported.
