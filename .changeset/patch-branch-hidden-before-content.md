---
"@marko/runtime-tags": patch
---

A branch that renders nothing releases the scope id it peeked, so the next branch no longer inherits its patch link. A hidden `<if>` before a content section used to hand that section its link, and a later settle flush then nested under the branch that hid, which the client rejects.
