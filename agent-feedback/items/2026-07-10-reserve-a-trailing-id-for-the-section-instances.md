---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › getSectionInstancesAccessor
---

# Reserve a trailing id for the section-instances fallback accessor

When a section has no `sectionAccessor`, `getSectionInstancesAccessor` falls back to `getAccessorPrefix().ClosureScopes + section.id` (optimized: `"B3"`). Both emit sites are explicit literals — the serialized key in `visitors/program/html.ts` and the `_content`/`_content_resume` renderer argument in `visitors/program/dom.ts` — so nothing derives the key at run time, and it could instead be a bare id reserved after the parent section's binding ids, following the `closureAccessorIds` pattern in the same file, dropping the letter for ~1 byte per serialized owner scope and per renderer. Only four `hoist-*` fixtures exercise the fallback, so the win is small.

Check: by grepping `packages/runtime-tags/src/__tests__/fixtures/*/__snapshots__/*.js` for `"B[0-9]+"`.
