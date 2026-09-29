---
"@marko/runtime-tags": patch
---

Stop shipping an empty setup call for a controllable element whose value and change handler come before a spread (`<select value=x valueChange=y ...attrs>`), and for an `<html-script>` or `<html-style>` whose spread writes its nonce.
