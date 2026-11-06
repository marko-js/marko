---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/html/control-flow.ts › forBranches
---

# Resume an unchanging only-child `<for>` by its branch marker once its row ids compress as well as the payload's links

In a template that enables branches (`branch-tag.ts` › `enablesBranches`), an unchanging `<for>` that is its element's only child still resumes by its element's marker plus a `BranchScopes` list and `_: _(owner)` on every row, since `getBranchMarkerReason` takes the branch marker only for an `<if>`. The branch marker is about 12 min bytes per one-element row smaller, but brotli grows in some row shapes: on 1,000-row lists it adds 589 to 671 bytes in three of the six row shapes measured (the end marker's space-separated, descending id list), and rows of several nodes add a start marker each, which grows brotli and gzip past about 50 rows. Direction: change how `forBranches`/`writeBranchEnd` write row ids (and `dom/resume.ts` reads them), for example as deltas, until both row shapes compress at least as well as the payload links, then let `getBranchMarkerReason` take loops.

Check: SSR `<let/count=0/><ul class=`c${count}`><for|item| of=input.items><li><b>${item.name}</b><p>${item.desc} ${count}</p></li></for></ul><if=count >= 0>x</if><button onClick() { count++ }>inc</button>` as a fixture with 1,000 items `{ name: w[(i * 7) % 8] + " " + ((i * 7919) % 1000), desc: w[(i * 3) % 8] + w[(i * 5) % 8] }` (`w` = `alpha` … `theta`). `writes.html` ends the `<ul>` with its element marker and carries `_: _(1)` per row; making `isIfBranch` true for loops cuts `sizes.json` `html.min` from 77,349 to 65,344 and raises `html.brotli` from 4,110 to 4,781.
