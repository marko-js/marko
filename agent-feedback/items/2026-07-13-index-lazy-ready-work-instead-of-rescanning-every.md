---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/dom/resume.ts › ready
---

# Index lazy ready work instead of rescanning every render

`ready(id)` adds the id to `readyIds` and then runs `runResumeEffects` for every render in `curRenders`; each `render.m` re-runs `processResumes(render.r)` and loops the entire global `readyIds` set against `render.b` to a fixed point. Drained channels are left in `render.b` as empty arrays rather than deleted, and every `processResumes` ends with `resumes.splice(0, i)` even when `i === 0`, so with L lazy chunks arriving separately that is O(L²) channel scans plus a splice per pass, per render — and a fully resumed render pays it again on each later `ready()`. Index pending renders and reverse dependencies by ready id and advance cursors instead of splicing, preserving late reordered gates and source-stream order.

Check: the `lazy-tag-reorder-stream-order` and `lazy-tag-nested-shared-reversed` fixtures still pass.
