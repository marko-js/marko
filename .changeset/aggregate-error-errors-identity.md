---
"@marko/runtime-tags": patch
---

Fix serializing an `AggregateError` whose `errors` array is shared with another reference or contains a deferred/circular member. The `AggregateError` constructor copies its first argument into a fresh `errors` slot, so those arrays previously lost their identity or silently dropped members on resume; the array is now relinked through the writable `errors` property.
