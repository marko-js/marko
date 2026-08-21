---
type: unclear
impact: med
effort: med
site: packages/runtime-tags/RESUMABILITY.md
---

RESUMABILITY.md — the guide AGENTS.md routes contributors to before touching
resume/serialization — does not mention persisted pages at all: no shells
(`src/translator/util/shell.ts`), frames/`PatchState`
(`src/html/patch.ts`), ready-channel deferral (`src/dom/patch-ready.ts`),
pairing or the `failPatch` navigation fallback. The feature spans several
thousand lines of runtime plus translator analysis with non-obvious
protocols (frame-var record delivery, branch partial nesting, epoch-keyed
bind tables); a contributor adding a core tag has no pointer that patch
mode and the admission guard must be revisited. Add a persisted-pages
section (or a sibling doc RESUMABILITY.md links) tracing frame emission →
application, and note the eval/CSP constraint (`new Function` frames need
`unsafe-eval`).

Check: search RESUMABILITY.md for "patch", "persisted", "shell" — no hits.
