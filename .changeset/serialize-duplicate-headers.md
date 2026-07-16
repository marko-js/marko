---
"@marko/runtime-tags": patch
"marko": patch
---

Fix duplicate header fields (notably multiple `Set-Cookie`) being lost when a `Headers`, `Request`, or `Response` is serialized for resumption. Headers were emitted as an object literal, collapsing repeated names to the last value; a repeated name now serializes as the tuple `Headers` form (`new Headers([[name, value], ...])`) so non-combinable fields round-trip.
