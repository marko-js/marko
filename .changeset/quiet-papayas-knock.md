---
"@marko/runtime-tags": patch
---

A page entry walks the templates each template's analysis loaded rather than loading each again through the entry, so a compile whose analyses are cached reads none of them from disk, and a Marko 5 project's page entry imports a root that several templates reach once.
