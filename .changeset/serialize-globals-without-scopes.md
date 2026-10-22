---
"@marko/runtime-tags": patch
---

`serializedGlobals` only reached the browser on a flush that wrote scopes, so a page whose only client code is an effect -- a `<script>` reading `$global`, with nothing else to resume -- never shipped them: the effect read `undefined` after resume while the same template rendered the value on the client. Globals now serialize with the first flush that needs the walker runtime, ahead of the effects it writes.
