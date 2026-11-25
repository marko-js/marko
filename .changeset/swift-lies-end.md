---
"@marko/runtime-tags": patch
---

A server render keeps the registrations bound to its scopes (functions, tag variables, element getters) in a map of its own instead of a global `WeakMap`, and a registered function that reads nothing from the render is created and registered once when its template loads. This reduces garbage collection on pages with many such registrations.
