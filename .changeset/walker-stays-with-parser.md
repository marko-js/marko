---
"@marko/runtime-tags": patch
---

A streamed page no longer loses the content and event handlers that arrive after another script (a tag manager, a browser extension) appends a node to `<body>` or `<html>` mid-stream, and a stateful `<body>` no longer hides out-of-order content streamed after it.
