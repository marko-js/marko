---
"marko": patch
---

Allow registering/loading top level hydrated components _after_ the "load" event. Previously after the load event it was assumed all assets would have been loaded but this is not always accurate for assets loaded through interactions.
