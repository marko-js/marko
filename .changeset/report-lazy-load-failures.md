---
"@marko/runtime-tags": patch
---

Report lazy module load failures in development: a loader script error or a
rejected chunk import now logs a diagnostic (and records the dead channel)
instead of leaving server-rendered content silently inert. Production
output is unchanged.
