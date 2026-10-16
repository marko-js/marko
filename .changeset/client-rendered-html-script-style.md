---
"@marko/runtime-tags": patch
---

A client-rendered `<html-script>` or `<html-style>` now behaves as a server-rendered one, in a branch, a loop row or a mounted template:

- A script runs once it is inserted, as one written in the page does; a client render used to insert it without running it. This holds for static or dynamic text, a `src` (classic or module) and spread attributes. The scripts one update inserts start once its renders are done and before its effects, in document order, each with its rendered attributes: a rendered `type` that is not a script type keeps one from running, and a `src` lands after the other attributes whatever order a spread lists them in.
- A script or style without its own `nonce` carries `$global.cspNonce` from creation, and a style takes its text after the attributes it renders, so a nonce Content Security Policy no longer refuses a client-rendered `<html-style>` with a rendered `nonce`. On a resumed page, the client reads the nonce from `$global`, so `cspNonce` must be listed in `serializedGlobals`.
- A client-rendered `<style>` whose placeholder reads a value from an enclosing tag keeps that declaration; it used to be dropped.
