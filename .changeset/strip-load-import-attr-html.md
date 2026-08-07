---
"@marko/runtime-tags": patch
---

The `load` import attribute is now stripped from compiled HTML output; unbundled server modules previously kept `with { load: ... }`, which Node rejects at import time.
