---
"@marko/runtime-tags": patch
---

Attach a controlled `<select>`/`<details>`/`<dialog>`'s MutationObserver once per element. Reached through spread attributes, the setup script re-runs on every render and attached a new observer each time with no disconnect, so they accumulated for the life of the page and all fired for the same mutation.
