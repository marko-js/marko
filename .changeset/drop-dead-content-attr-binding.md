---
"@marko/runtime-tags": patch
---

Stop emitting a dead scope binding, walk slot, and resume marker for a `content` attribute on a native tag that also has body content — codegen already drops the attribute (body wins), so analyze now ignores it too.
