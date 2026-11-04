---
"@marko/runtime-tags": patch
---

Fix `serializedGlobals` not reaching the client on a page, or in lazy content, whose only client code is an effect (such as a `<script>` reading `$global`), which read `undefined` after resume.
