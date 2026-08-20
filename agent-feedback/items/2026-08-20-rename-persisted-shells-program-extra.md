---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/shell.ts › getShells
---

# Rename the `persistedShells` program extra to a fact-shaped name

The `ProgramExtra.persistedShells` property follows the `persistedX` naming
pattern the repo's analyze conventions warn against: extras should name the
template fact (what the records ARE), not the feature consuming them. It is
translate-computed, so the fix is a mechanical rename (e.g. `shellRecords`)
across `shell.ts` and `visitors/program/html.ts`.

Check: `grep -rn persistedShells packages/runtime-tags/src` — declaration
and uses all read as feature-tagged rather than fact-shaped.
