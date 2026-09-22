---
"@marko/runtime-tags": patch
---

The body of a dynamic tag whose name is always a string (`<${big ? "h1" : "h2"}>`) is no longer registered for resume: only a component receives the body as a value, so the server writes just its id and the client never looks it up.
