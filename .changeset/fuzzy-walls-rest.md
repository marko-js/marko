---
"marko": patch
---

Fix regression where text was bring split too eagerly while hydrating including text which was not rendered by the current component. This lead to a diffing issue where elements could display in the wrong order.
