---
"@marko/runtime-tags": patch
---

When a Class API (Marko 5) page renders interactive Tags API (Marko 6) templates through interop, the client entry now imports those Tags API island templates directly instead of importing the Class API entry root. A server only Class API root (and the Marko 5 runtime it would otherwise pull in) can then be dead code eliminated, so a page whose only Class API templates are server only ships no Marko 5 runtime. Pure Tags API pages are unaffected.
