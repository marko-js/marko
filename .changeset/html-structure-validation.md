---
"@marko/runtime-tags": patch
---

Report invalid HTML structure during development, with the originating template position (`file:line:col`). Markup that the browser's parser relocates, drops or re-nests silently desynchronizes hydration, and is now surfaced instead of failing at hydration time.
