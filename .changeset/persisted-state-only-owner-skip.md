---
"marko": patch
---

Purely state-driven `<if>`/`<for>` branches keep marker-linked owners
under the persisted option instead of serializing them: such branches
never participate in update payloads (the server never pairs into
client-state-driven structure), so the resume-marker owner linking stays
sound. Branches with any request-derived part in their condition keep
serialized owners (update payloads carry no markers to link from).
