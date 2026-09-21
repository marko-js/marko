---
"@marko/runtime-tags": patch
---

A registration the DOM output makes at the module top level (an exported function, a class API host) assigns into the resume registry, now exported as `_resumed`, instead of calling `_resume`: fewer bytes per registration and no call.
