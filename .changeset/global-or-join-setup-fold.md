---
"marko": patch
---

Statements joined on intersections of promoted `$global` reads now fold
into setup placement instead of building an `_or` join: no member of a
pure-global intersection has a client-side value signal, so the join
could never fire — fresh branches created during a persisted apply
silently skipped the statement (eg a `<let>` seeded from two `$global`
reads stayed undefined).
