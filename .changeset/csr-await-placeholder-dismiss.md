---
"@marko/runtime-tags": patch
---

Fix a client render where a rejected `<await>` or a failed lazy load under an ancestor `<try @placeholder>` left the placeholder shown forever. The failure path now completes the placeholder's await counter (unless it is a placeholder-less or resumed reorder counter), so the placeholder is dismissed and the caught content renders.
