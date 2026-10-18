---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/program/html.ts › program translate exit (the `_shells` marker)
---

# Drop the lone `!` shell marker no created scope needs

A shell whose section has patch fill bindings and no setup ids ships a lone `!` ("setup for seeds alone": `marker ||= getPatchFillBindings(section) ? "!" : ""`), which gives its renderer an empty setup. No fixture needs it: with the line disabled, every patch fixture still renders the same (8,020 passing on `pnpm test -- --grep "runtime-tags/translator patch"` with `UPDATE_EXPECTATIONS=1`, no `render*.md` changes), while 287 html bundles and 5 patch wires lose 2 bytes per such shell (`b1 !;` → `b1;`, `a3 !,` → `a3,`). Remove the line, or give the case that needs it a fixture.

Check: replace the line with `marker ||= "";`, run the patch family with `test:update`, and diff `**/render*.md` (none change) and `**/patches.js`.
