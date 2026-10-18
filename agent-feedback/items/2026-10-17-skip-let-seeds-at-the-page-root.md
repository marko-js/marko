---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/patch/writers.ts › buildLetSeeds
---

# Skip `<let>` seeds at the page root

`buildLetSeeds` emits a setup seed (`_patch_value(…, 1)`) for a page root's assigned or written `<let>`, but the page itself is never created, so `_patch_value` drops it at runtime (`setup && !inCreatable()`). Each such page carries the dead call in its html, and the seed's key takes a fill id ahead of the dom's. Return no seeds for a page root (`!section.parent && isPage()`), as the render-read seeds already do; expect the dom fill ids of most patch fixtures to renumber.

Check: `patch-branch`'s html.bundle.js has `_patch_value($scope0_id, "va2", count, 1)` at the page root.
