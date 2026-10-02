---
"@marko/runtime-tags": patch
---

Drop a controlled `<let>` (one with a `valueChange`) that nothing reads or assigns in emitted code, as an uncontrolled one already is, instead of shipping its signals and its change handler. Its impure values still run, in both outputs, with what they read.
