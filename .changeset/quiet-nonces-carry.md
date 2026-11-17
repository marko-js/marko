---
"@marko/runtime-tags": patch
---

`$global.cspNonce` now always reaches the client `$global`, so a `<script>` or `<style>` rendered in the browser gets the nonce without listing it in `serializedGlobals`.
