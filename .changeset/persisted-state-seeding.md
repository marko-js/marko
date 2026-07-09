---
"@marko/runtime-tags": minor
---

Seed-mode update renders (`$global.persistedSeed` with
`persisted: "update"`; set by @marko/run when a navigation's
`x-marko-from` route differs from the target) serialize state values too:
a cross-route navigation's fresh subtree cannot compute state whose
initializers live behind server-only expressions, so the seed IS the
initial value. Persisted dom builds register `let` signals, update
entries apply seeds through them (downstream derivations recompute), and
`_update_seed` gates them client-side to scopes created during the apply
— matched scopes' live state stays hostile-patch-proof. `_let`
initializers defer to a landed seed while updating, and `_const`
re-renders equal values on fresh-during-apply scopes so merge fills and
setup are order-independent (the mid-merge flush this replaces was
depth-fragile). Same-route payloads are byte-identical; cross-route
payloads grow only by the target subtree's state.
