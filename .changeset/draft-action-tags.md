---
"@marko/runtime-tags": minor
---

Add the `<draft>` and `<action>` core tags for optimistic updates. `<draft/x=source>` derives like a `<const>` but takes provisional assignments from an `<action>` body or an event handler: a guess shows at once, holds for the act's lifetime (its body and the promise it returns), then the draft re-derives from its source, with no DOM work when the guess was right. `<action/act=fn>` declares a user act with a reactive, refcounted `act.pending`; awaits in its body compile to transaction re-entry so assignments after an `await` still join the act, and a value-less `<action/apply/>` is the identity for tracking a promise.
