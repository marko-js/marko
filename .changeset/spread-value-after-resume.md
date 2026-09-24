---
"@marko/runtime-tags": patch
---

A value spread onto a native tag inside a nested branch, or beside an attribute that changes on its own, keeps its attributes when the tag re-renders after resume. Content that streams in after the page resumed now shows values changed while it was pending, including behind a `<try>` placeholder in another component, and no longer blanks one that never changed. A `<define>` body called inside a branch the client re-creates keeps the values it closes over, and one that is both called directly and rendered as a dynamic tag no longer throws when it closes over a value. Fewer values reach the browser: a native tag with a spread sends its attribute values only when a client render reads them, and a value read inside a branch is not sent when every change that re-creates the branch recomputes it.
