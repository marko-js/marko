---
"@marko/runtime-tags": patch
"marko": patch
---

Improve debug "Unable to serialize" errors: restore variable names and locations for escaped keys and values inside Maps/Sets/generators, and name the offending controllable handler attribute or spread instead of printing internal accessors.
