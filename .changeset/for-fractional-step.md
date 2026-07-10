---
"@marko/runtime-tags": patch
---

Fix `<for to= step=>` dropping the documented-inclusive endpoint when a fractional step's division lands just under an integer (`from=0 to=0.3 step=0.1` yielded `0, 0.1, 0.2`). `<for until=>` had the mirrored defect, including its exclusive endpoint when the division lands just over. Both now compare with an epsilon.
