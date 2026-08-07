---
"@marko/runtime-tags": patch
---

Warn at compile time when a `<script>` body returns a cleanup function, which is discarded; point at `$signal.onabort` and `<lifecycle onDestroy>`.
