---
"@marko/runtime-tags": patch
---

A `<show>` that is its element's only child shows the content it actually has when a nested `<if>` or `<show>` changed that body while it was hidden: hiding parks the body in a fragment, and showing now takes the range back from what that fragment holds instead of re-inserting the nodes it parked and leaving the live content out of the DOM.
