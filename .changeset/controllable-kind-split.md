---
"@marko/runtime-tags": patch
---

The controllable attr helpers split into per-kind dom modules
(input value, input checked/checkedValue, select, details/dialog open,
plus a shared delegation core), so a page's hydration bundle hosts only
the controllable kinds it actually renders instead of all five.
