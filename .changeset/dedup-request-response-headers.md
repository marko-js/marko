---
"@marko/runtime-tags": patch
---

When a `Request`/`Response` is serialized after its `headers` object was already serialized standalone, reuse that reference instead of re-emitting the header entries inline and overwriting it. This dedups the emitted data and keeps other references to those headers consistent on resume.
