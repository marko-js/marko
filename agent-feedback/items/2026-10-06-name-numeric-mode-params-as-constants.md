---
type: cleanup
impact: low
effort: med
site: packages/runtime-tags/src/html/dynamic-tag.ts › _dynamic_tag
---

# Name numeric mode values with constants modules instead of inline docs

Several html runtime parameters and values carry multi-valued numeric modes whose meaning lives only in a comment beside them: `_dynamic_tag`'s `patchPairing` (`1` pairs and re-renders, `3` pairs keeping the live branch, `2` skips; compared as `patchPairing === 1 || patchPairing === 3`), the same values returned by `_patch_dynamic_tag`, and a param group's 2-bit sources value from `maskGroup` (`1` client, `2` server, `3` both; read as `owned === 2` in `patchFillEntries` and `_filled_guard`, `& 1` in `_client_guard`). Give each a constants module under `src/common/constants/` the way `controlled-type.ts` names `ControlledType` (`export const` members plus a `Value` type, imported as a namespace), so call sites read by name and the bundler still folds them to literals. The translator side can emit the same named values through the module so generated code and runtime agree.

Check: `grep -rn "patchPairing === \|owned === 2\|owned !== 2" packages/runtime-tags/src/html` lists the bare-number comparisons.
