---
"@marko/compiler": patch
---

Show the error text when a compile fails with several errors, or a `marko.json` option is invalid, in JavaScript engines whose error `stack` leaves out the message. In Node, the combined message no longer includes the compiler's own stack frames for an error without a location, and a `marko.json` option error no longer embeds its cause's stack trace.
