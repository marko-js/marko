---
"@marko/runtime-tags": minor
"@marko/compiler": minor
---

Add experimental persisted-page support: opted-in builds stream sparse
server-rendered updates into a resumed page through compiled signals, with
structurally new branches arriving as resumable HTML fragments. Builds without
the `persisted` option keep their existing document and client output.
