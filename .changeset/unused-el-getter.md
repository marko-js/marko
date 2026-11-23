---
"@marko/runtime-tags": patch
---

An element reference read as a value only by code the server never runs (an event handler or `<script>`, or a function only event handlers read) no longer registers its getter for resume or creates one on the server.
