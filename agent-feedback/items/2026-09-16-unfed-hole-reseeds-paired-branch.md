---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/writer.ts › _filled_guard
---

# Gate unfed-hole seeds to scopes the flush creates

`_filled_guard` fills an unfed hole (mask `0`) whenever `isInResumedBranch()` is true, so a patch re-renders any branch or loop row body under `withBranchId` and ships the hole as a plain `PatchKey.Text` (or Html/Style/TextContent) entry. The client applies those entries to paired scopes too: `patch-text.feat.ts` registers only in `patchers`, never `createPatchers`, so a revisit of an `<if>` branch at the same index or a keyed `<for>` row the page keeps overwrites a value that had nothing request-derived behind it (a counter, a random id, a timestamp). Direction: ship a seed-only fill (mask `0` in a branch) under `PatchKey.Setup` and register the text-like patchers in `createPatchers`, so `patchCreated` applies them only to scopes newer than the flush and paired scopes keep their value. A dynamic tag whose renderer entry does not ship already avoids this (`_patch_dynamic_tag` returns `3`); branches and rows have no equivalent because the server cannot tell a paired row from a created one.

Check: fixture `template.marko` = `static let n = 0` then `<if=input.show><b>${++n}</b></if>` with `patches: true`, `skip_fresh_render: true`, steps `[{ show: true }, { show: true }]`; the second patch ships `ba: [{ ta: "2" }, …]` and the render log shows `UPDATE: b::text "1" => "2"`.
