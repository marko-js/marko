---
"marko": patch
---

Fix the tags-compat interop so re-renders of a server-rendered Marko 5 child reuse its fragment directly instead of falling back to a component lookup every time.
