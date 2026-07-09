---
"@marko/runtime-tags": minor
---

Persisted updates cross async boundaries and apply per frame. `<await>`/
`<try>` bodies now serialize the parent → body branch link as a scope prop
in update renders (there is no HTML end-marker to carry it) and update
entries dispatch the body's merge from it, so awaited content updates on
persisted navigations instead of going stale. The new `createUpdate` export
(re-exported by generated `?update` entries) is the per-navigation streaming
applier: one call per response frame against a shared patch context —
synchronous page content settles immediately and each async boundary's body
lands as its frame arrives, in resolution order, like a streamed document.
Re-dispatching the root merge per frame is safe by construction: presence
checks pick up newly arrived keys and every merge primitive no-ops on
unchanged input (unsafe-html holes consume their patch key explicitly).
