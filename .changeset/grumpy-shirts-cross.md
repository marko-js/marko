---
"marko": patch
---

Fix issue where native tags with `no-update` were not having their key serialized from the server causing a hydration diffing issue in some cases.
