---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/html/patches/writer.ts › effect entries; packages/runtime-tags/src/dom/patches/effect.feat.ts
---

# Move an effect entry's fixed deps onto its registration

Every patch's effect entry lists the values the effect reads (`eb0: "d"`), though that list is fixed per template; a live function's registration already carries its captures instead (`_bind_resume("a0 d")`).
Measured at the squash `0e4d8b73ddb`: the lists come to 524 B over 315 entries in 135 fixtures (about 2 B per entry), and moving them adds about as much to each effect's registration in every template's code, so the net is unclear.
Explore properly before building: per-unit bytes (per entry per patch against per template), whether the entry can shrink to a bare flag (`eb0: 1`), and whether the registration form can share `_bind_resume`'s capture list.

Check: in fixture `patch-loop-join-effect-client-input`, the optimized `patches.js` carries `eb0: ">e d"`-style dep lists on each patch.
