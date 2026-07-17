---
"@marko/runtime-tags": minor
---

Add `<draft>` and `<action>` core tags for optimistic updates. `<draft>` declares an assignable view of server-derived truth that renders as its `value=` source except while a transaction holds a provisional assignment; `<action>` declares a user act and exposes a refcounted reactive `.pending`. Both are defined in terms of a client-only transaction that opens when an action is invoked, is extended by its returned promise, and releases (discarding held guesses) when all of its promises settle — a rejected act rolls its guesses back and the rejection reaches the caller as usual. A value-less `<action>` defaults to the identity function, so `act(promise)` makes a pending-only act that tracks an arbitrary promise, and the dom runtime exposes `extendTransaction` so a router (or a future navigation integration) can tie navigations into the same lifecycle.
