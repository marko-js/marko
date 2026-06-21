---
"@marko/runtime-tags": patch
---

Fix `<for to>`/`<for until>` range loops corrupting their DOM on the first update after an SSR resume. Without an explicit `by`, these loops are keyed by their iteration value, but the HTML writer decided whether to serialize the loop key by comparing the key against the iteration value rather than the positional index — so the key was never written. On resume the branches were keyed by position while the client re-keyed them by value, and any range loop where the value differs from the position (`from` other than `0`, or a `step` other than `1`) with resumable content (event handlers, `<let>`, etc.) would tear down and rebuild its branches. The writer now compares against the positional index, matching `<for of>`.
