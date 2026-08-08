---
"@marko/runtime-tags": patch
---

A streaming sink that throws (e.g. a client disconnect mid-write) no longer degrades progressive streaming for other renders in flight on the same server.
