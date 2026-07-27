---
"@marko/runtime-tags": patch
---

Report a compile error when an `<import>`/`<export>` line holds more than one statement. Every statement after the first was silently discarded, leaving the template referencing an undefined binding at render.
