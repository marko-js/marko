---
"@marko/runtime-tags": patch
---

A control-flow branch whose entire markup is an `Object.prototype` member name (e.g. bare text `constructor`) no longer crashes client rendering; the clone cache key is prefixed so inherited properties can't collide.
