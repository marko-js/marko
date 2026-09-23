---
"@marko/compiler": patch
---

Print async shorthand methods back as shorthand (`async onClick() {}`) in `output: "source"` and `"migrate"`, instead of expanding them to `onClick=(async function () {})`.
