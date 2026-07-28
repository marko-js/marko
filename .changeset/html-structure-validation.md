---
"@marko/runtime-tags": patch
---

Report invalid HTML structure during development, with the originating template position (`file:line:col`). Markup the browser's parser relocates, drops or re-nests silently desynchronizes hydration, so the streamed output is now checked and any such construct is reported.
