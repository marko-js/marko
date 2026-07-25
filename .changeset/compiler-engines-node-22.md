---
"@marko/compiler": patch
---

Declare `engines.node: ">=22"`, matching the other published packages. The previous `18 || 20 || >=22` range could not resolve on Node 18 — the `@luxass/strip-json-comments` dependency requires `>=20` — and both 18 and 20 are past end-of-life, so the range now matches the documented policy of supporting the maintained Node releases.
