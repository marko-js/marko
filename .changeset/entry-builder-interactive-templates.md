---
"@marko/runtime-tags": patch
---

The interop client entry now only ships runtime for templates that actually run on the client, dead code eliminating server only templates of either API and the runtime they would otherwise pull in:

- A Tags API (Marko 6) page that renders only inert/server only Class API (Marko 5) children no longer forces client hydration, so it ships no Marko 5 runtime. Stateful class children continue to hydrate through the Marko 5 runtime independently.
- When a Class API page renders interactive Tags API templates, the client entry imports those Tags API island templates directly instead of the Class API entry root, so a server only class root (and its Marko 5 runtime) can be dropped.

Pure Tags API pages are unaffected.
