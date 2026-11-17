---
"@marko/runtime-tags": patch
---

Server output inlines a write guard read only once instead of declaring it, since the section's marker guard is now built only where it is used.
