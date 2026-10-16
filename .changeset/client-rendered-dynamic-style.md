---
"@marko/runtime-tags": patch
---

A client-rendered `<style>` whose placeholder reads a value from outside the control flow body that renders it keeps that declaration; it used to be dropped.
