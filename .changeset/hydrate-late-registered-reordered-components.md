---
"marko": patch
---

Fix a crash when a component type registers after `<await client-reorder>` replaced a placeholder holding one of its instances, which also left the remaining instances of that type unhydrated.
