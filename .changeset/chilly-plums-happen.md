---
"marko": patch
---

Fix issue where an out of order await contained an in order await and then another out of order await. This previously caused a race condition where if the final out of order await resolved first, it'd try to send it's content without it's placeholder location being available.
