---
"@marko/runtime-tags": patch
"marko": patch
---

Fix the development-only `checkedValue`/`checked` mutual-exclusivity assertion missing the conflict when a spread supplies a falsy controllable value (e.g. `checkedValue={0}` or `checked={false}`). Presence is now tested with `in` instead of truthiness, matching how the runtime detects these attributes elsewhere.
