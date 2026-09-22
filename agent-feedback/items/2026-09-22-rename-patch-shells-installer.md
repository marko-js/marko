---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/dom/resume.ts › _patch_shells
---

# Name the patch shell installer like the other feature installers

`_patch_shells` carries the `_name` prefix that marks runtime API called by generated code, but no compiler output calls it: only `dom/patch-shells.ts` does, to install its shell handler. The other feature installers (`installCatch`, `installReady`, `installPatchReady`, `installBindRef`) use an `install*` name, so the prefix misleads anyone looking for codegen entry points. Rename it (e.g. `installPatchShells`) and make it a function declaration like its peers.

Check: `grep -rn "_patch_shells" packages/runtime-tags/src` matches only `dom/resume.ts` and `dom/patch-shells.ts`, and no `callRuntime("_patch_shells"` exists.
