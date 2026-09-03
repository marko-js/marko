---
"@marko/compiler": patch
---

Report a compile error for a spread argument on a custom tag (`<child(...args)/>`). A template cannot reference its arguments, and the client output previously imported a signal the child never exported.
