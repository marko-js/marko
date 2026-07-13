---
"@marko/runtime-tags": minor
"@marko/compiler": minor
---

Add experimental persisted-page compilation and runtime support. Opted-in
builds can stream sparse server-rendered updates into a resumed page through
compiled signals; structurally new branches arrive as resumable HTML fragments.

Persisted-only merge programs and the DOM update applier are separate lazy
entries so they are not part of the initial page runtime. Builds without the
`persisted` option retain the existing document and client output.
