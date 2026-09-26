---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/dom/signals.ts › _for_closure
---

# Key loop-wide closure renders so they sort before every row

`_for_closure` and `_for_selector` queue their loop-wide render with key `scopes[0][AccessorProp.Id] * 1e6 - 1`, assuming the first row has the lowest scope id. After a keyed `<for>` prepends a row, `scopes[0]` is the newest row with the highest id, so in an update that writes both a row `<let>` and the closed-over owner value, older rows' own renders run first with the stale Closure value. The Closure's later write into such a row reaches its `_or` slot with `Gen === runId` and is dropped, leaving that row stale. Direction: derive the key from something list order cannot change, such as the owner scope's id or the minimum row id, so the loop-wide render always sorts before every row.

Check: fixture `template.marko` = `<let/items=[1, 2]/>` `<let/n=0/>` `<button.prepend onClick() { items = [0, ...items] }/>` `<for|item| of=items by=(x) => x><let/m=0/><const/label="n" + n/><button class="row" + item onClick() { m++; n++ }>${m + ":" + label}</button></for>`, steps `[{}, click .row1, click .prepend, click .row1]`: before the prepend the click gives `.row1` `1:n1`, and after it the second click leaves `.row1` at `2:n1` while `.row0` and `.row2` show `0:n2` (CSR and resume alike).
