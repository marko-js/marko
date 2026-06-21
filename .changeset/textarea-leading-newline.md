---
"@marko/runtime-tags": patch
---

Fix a `<textarea>` losing a leading newline in its value on resume. The HTML parser strips a single leading newline immediately after the `<textarea>` open tag, so a value beginning with a newline (e.g. `"\nhello"`) was parsed back without it on the client. Since the client sets the value via a DOM property (which preserves the newline) while the server-rendered markup dropped it, resume diverged from client rendering. The server now emits a compensating leading newline so the value round-trips for controlled, uncontrolled, and static-content textareas alike.
