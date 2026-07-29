---
"@marko/runtime-tags": minor
"@marko/compiler": minor
---

Add experimental persisted-page support: opted-in builds stream sparse
server-rendered updates into a resumed page through compiled signals, with
structurally new branches arriving as resumable HTML fragments. Fail-closed
dispatch loads `load=` candidates on demand and falls back to a document
navigation when a merge is missing or a chunk fails; the committed
value-claim store holds 256 entries. Builds without the `persisted` option
keep their existing document and client output.
