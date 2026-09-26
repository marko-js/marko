---
"@marko/runtime-tags": patch
---

Fix `<script>` and other effects inside a `<try>` whose content is waiting on an `<await>`. An update that changed only the hidden content ran its effect right away against the detached DOM and did not run it again when the content returned; it now waits for the content like any other effect there. An effect queued by several updates while the content waits now runs once when it returns, instead of once per update. Effects waiting on a `<try>` still streaming from the server, such as event handlers in content the client creates there or a server `<script>` sent before that content completes, now run when the content arrives instead of being dropped.
