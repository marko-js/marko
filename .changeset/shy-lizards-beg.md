---
"@marko/runtime-tags": patch
---

Migrate Marko 5's `out.global` to `$global` only in Tags templates that the interop translator (`marko`) compiles, so a Tags-only project no longer rewrites `out`, and leave the scope crawl after migration to the compiler. Also skip binding lookups for identifiers the translator never rewrites.
