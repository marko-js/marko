---
type: dx
impact: med
effort: low
site: skills/marko-5-to-6-migration/SKILL.md › Reference files
---

# Link the cheatsheet from the migration skill, with its `marko@5` path

Neither skill mentions `packages/runtime-tags/cheatsheet.md`, even though its `DON'T` table is the densest list of exactly the habits a Marko 5 migration leaves behind (`on-click("name")`, `input.renderBody`, `$ ` scriptlets, `class {}`, `{expr}`) and its golden rules cover traps none of the skill's three reference files mention — the top-level `>` that silently closes a tag, and native inputs staying uncontrolled until their `*Change` handler is added. The gap is worse during the incremental phase the skill recommends for large apps: the app is still on `marko@5`, whose `files` list ships no cheatsheet, so the file exists only at `node_modules/@marko/runtime-tags/cheatsheet.md` (reached through marko@5's own `@marko/runtime-tags` dependency) — a path no migration doc names, and not the `node_modules/marko/cheatsheet.md` the compiler's fix guide prints once the app is on marko@6. Add it to `## Reference files` with both paths and say which phase each applies to.

Check: `grep -ri cheatsheet skills/` prints nothing today; it should name the file and give the `@marko/runtime-tags` path for the marko@5 phase, which `node -p "require('./packages/runtime-class/package.json').files.join()"` confirms is the only one that exists there.
