---
"marko": patch
---

Request-derived `<option value>` holes now ride persisted updates: the
html compile captures them like other attr holes (the dom compile already
recorded the matching `_attr` merge), so matched options update their
value and options created fresh by a keyed reconcile fill it. Live
selection re-sync under an unchanged select value remains a recorded
follow-up.
