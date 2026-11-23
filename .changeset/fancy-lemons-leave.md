---
"@marko/runtime-tags": patch
---

A hoisted tag variable read only by code the server never runs (an event handler or `<script>`, or a function only event handlers read) no longer registers its getter for resume or creates one on the server, which never writes it.
