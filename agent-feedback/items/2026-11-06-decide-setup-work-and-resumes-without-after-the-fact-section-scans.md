---
type: cleanup
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/setup-work.ts › finalizeSetupWork
---

# Decide `hasSetupWork` and `hasResumes` without after-the-fact section scans

At program analyze exit, `finalizeSetupWork` runs two `forEachSection` passes to set `Section.hasSetupWork`: first a section's own work, then upward through `renderedBy` calls. The program visitor's analyze `exit` (`visitors/program/index.ts`) runs a third `forEachSection` to set `ProgramExtra.hasResumes` from each section's mapped reason and renderer reason. Package AGENTS.md › Translator ("Gather in analyze, act in translate") rules out a whole-program scan that records a decision after the fact: the step that settles its inputs should record it. Fold each decision into the pass that settles its inputs (`solveReasons` already walks every section once reasons settle, and `finalizeReferences` once references do), or derive it on demand through a per-analysis memo where it is read: `hasSetupWork` in `util/known-tag.ts`, `core/define.ts` and the tag and dom program visitors, `hasResumes` in `util/entry-builder.ts`.

Check: `grep -n "forEachSection" packages/runtime-tags/src/translator/util/setup-work.ts packages/runtime-tags/src/translator/visitors/program/index.ts` shows the three exit-time scans and the fields they set.
