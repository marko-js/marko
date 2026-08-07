---
"@marko/runtime-tags": patch
---

Fix `Sorted.isSuperset` rejecting valid supersets, and give controllable change handlers (including on dynamic tags) their own serialize reasons so their functions stay registered now that intersection pruning is accurate. Bound native inputs serialize slightly less, and computed bound attributes (`value:=state[key]`) now register their handlers.
