---
type: cleanup
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/program/index.ts › isLoadEntry
---

Lazy load failure reporting (`readyFailed` in `src/dom/resume.ts`, the load
entry's rejection arm, and the loader-script `onerror` wiring in
`src/html/assets.ts` › `writeTriggerScript`) is gated on `isPersisted()`
because persisted patches need it to settle. The gap it closes is general:
on ANY page a failed lazy chunk currently leaves inert SSR content silently
(no `@catch`, no signal). Backporting the protocol to main — un-gating the
rejection arm and onerror wiring, and driving the ready-channel branches'
`@catch`/await-counter machinery from `readyFailed` — would give lazy SSR a
real failure story and dissolve the persisted-only gates here.

Check: non-persisted fixture with `load: "on-click body"` +
`reject_load: ["load.mjs"]` — the child stays inert with no catch UI and no
console signal.
