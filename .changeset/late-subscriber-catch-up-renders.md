---
"@marko/runtime-tags": patch
---

Fix content that resumes after its owner, such as content behind a `<try>` placeholder, keeping stale server-rendered values after the page changed a value it reads while it was pending. Its catch-up render now flushes as the content arrives instead of waiting for an unrelated update, and a `<script>` it re-runs does so then rather than during that later update. A `<let>` in that content keeps its server-rendered value instead of taking the changed initial value, as a `<let>` does whenever its `value=` changes.
